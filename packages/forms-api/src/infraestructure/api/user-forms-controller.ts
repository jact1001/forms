import {BodyParams, Context, Controller, Get, PathParams, Post, Response, UseBefore} from "@tsed/common";
import { IUserForms } from "../../core/domain/user-forms";
import { UserFormsUseCase } from "../../core/use-cases/user-forms-use-case";
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import { Response as ExpressResponse } from "express";
import * as ExcelJS from 'exceljs';
import {IUseCase} from "../../core/domain/use-case";

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
            const fieldsSectionsToColumns = (section) => {
                const columns = {};
                section.fields.forEach((field) => {
                    columns[field.label] = field.value;
                });
                return columns;
            }
            const buildColumnsFieldsHeaders = () => {
                const sectionsMapFields = new Map();
                useCases.forEach((useCase) => {
                    useCase.sections.forEach((section) => {
                        const sectionId = section.id.toString();
                        console.log('sectionId: ', sectionId);
                        const sectionFilesNames = section.fields.map(field => `${field.label} (${section.sectionName})`);
                        console.log('sectionFilesNames: ', sectionFilesNames);
                        const lastSectionFilesNames = sectionsMapFields.get(sectionId);
                        console.log('lastSectionFilesNames: ', lastSectionFilesNames);
                        const newSections = lastSectionFilesNames ?
                            sectionFilesNames.concat(lastSectionFilesNames.filter(value => !sectionFilesNames.includes(value))): sectionFilesNames;
                        console.log('newSections: ', newSections);
                        sectionsMapFields.set(sectionId, newSections);
                    })
                });
                return Array.from(sectionsMapFields.values()).flatMap(array => array);
            }
            worksheet.addRow(['Case Name', 'Case State', ...buildColumnsFieldsHeaders()]);
            useCases.forEach((json) => {
                const fila = [
                    json.case_name,
                    json.case_state.name,
                    ...Object.values(fieldsSectionsToColumns(json.sections[0])),
                ];
                worksheet.addRow(fila);
            });
            const TempName = `${formName}.xlsx`;
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=${TempName}`);
            await workbook.xlsx.write(res); // Utilizar res para escribir directamente en la respuesta HTTP
        } catch (error) {
            console.error('Error al generar el archivo Excel:', error);
            res.status(500).send('Error al generar el archivo Excel');
        }

    }


}
