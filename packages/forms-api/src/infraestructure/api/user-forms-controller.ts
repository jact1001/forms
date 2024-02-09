import {BodyParams, Context, Controller, Get, PathParams, Post, Response, UseBefore} from "@tsed/common";
import { IUserForms } from "../../core/domain/user-forms";
import { UserFormsUseCase } from "../../core/use-cases/user-forms-use-case";
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import { Response as ExpressResponse } from "express";
import * as ExcelJS from 'exceljs';
import { IUseCase } from "../../core/domain/use-case";
import { ISection } from "../../core/domain/form";

@Controller("/user-forms")
@UseBefore(AuthTokenMiddleware)
export class UserFormsController {

    public constructor(private readonly _userFormsUseCase: UserFormsUseCase) {}

    @Get("/")
    async getUserForms(@Context() ctx: Context): Promise<IUserForms> {
        const email = ctx.get("email");
        return await this._userFormsUseCase.getUserForms(email);
    }

    @Post("/use-case")
    async createCase(@BodyParams() { useCase, formId }, @Context() ctx: Context): Promise<IUserForms> {
        const email = ctx.get("email");
        return await this._userFormsUseCase.createCase(useCase, formId, email);
    }

    @Get("/export/:formId")
    async export(@PathParams('formId') formId: string, @Response() res: ExpressResponse, @Context() ctx: Context): Promise<any> {
        try {
            const email = ctx.get("email");
            const useCases: IUseCase[] = await this._userFormsUseCase.exportUseCasesByFormId(formId, email);
            const formName = useCases.length && useCases[0].form_name;
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');

            const getTextValue = (value: any) => {

                if (!value || (Array.isArray(value) && value.length === 0)) {
                    return '';
                }

                if (typeof value === 'string') {
                    return value;
                }

                if (Array.isArray(value)) {
                    return value.map(val => val.text).filter(Boolean).join(', ');
                }

                if (value.text) {
                    return value.text;
                }

                return '';
            }

            const fieldsSectionsToColumns = (sections: ISection[]) => {
                let columns = {};
                sections.forEach((section) => {
                    section.fields.forEach((field) => {
                        columns[field.label] = getTextValue(field.value);
                    });
                })
                return columns;
            }

            const buildColumnsFieldsHeaders = () => {
                const sectionsMapFields = new Map();
                useCases.forEach((useCase) => {
                    useCase.sections.forEach((section) => {
                        const sectionId = section.id.toString();
                        const sectionFilesNames = section.fields.map(field => `${field.label} (${section.sectionName})`);
                        const lastSectionFilesNames = sectionsMapFields.get(sectionId);
                        const newSections = lastSectionFilesNames ? sectionFilesNames.concat(lastSectionFilesNames.filter(value => !sectionFilesNames.includes(value))): sectionFilesNames;
                        sectionsMapFields.set(sectionId, newSections);
                    })
                });
                return Array.from(sectionsMapFields.values()).flatMap(array => array);
            }
            worksheet.addRow(['Nombre del Caso', 'Estado del Caso', ...buildColumnsFieldsHeaders()]);
            useCases.forEach((useCase) => {
                const fila = [
                    useCase.case_name,
                    useCase.case_state.name,
                    ...Object.values(fieldsSectionsToColumns(useCase.sections)),
                ];
                worksheet.addRow(fila);
            });
            const TempName = `${formName}.xlsx`;
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=${TempName}`);
            await workbook.xlsx.write(res);
        } catch (error) {
            console.error('Error al generar el archivo Excel:', error);
            res.status(500).send('Error al generar el archivo Excel');
        }

    }


}
