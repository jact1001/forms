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
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');
            const fieldsSectionsToColumns = (section) => {
                const columns = {};
                section.fields.forEach((field) => {
                    columns[field.label] = field.value;
                });
                return columns;
            }

            const primerSeccion = useCases[0].sections[0];
            const encabezados = primerSeccion.fields.map(field => field.label);

            const buildColumnsFieldsHeaders = () => {
                const sectionsMapFields = new Map();
                useCases.forEach((useCase) => {
                    useCase.sections.forEach((section) => {
                        const sectionFilesNames = section.fields.map(field => field.label);
                        const lastSectionFilesNames = sectionsMapFields.get(section.id);
                        const newSections = lastSectionFilesNames ?
                            sectionFilesNames.concat(lastSectionFilesNames.filter(value => !sectionFilesNames.includes(value))): sectionFilesNames;
                        sectionsMapFields.set(section.id.toString(), newSections);
                    })
                });
                return Array.from(sectionsMapFields.values()).flatMap(array => array);
            }

            // Agregar encabezados a la hoja de cálculo
            worksheet.addRow(['Case Name', 'Case State', ...buildColumnsFieldsHeaders()]);

            // Agregar datos de cada JSON como una fila en la hoja de cálculo
            useCases.forEach((json) => {
                const fila = [
                    json.case_name,
                    json.case_state.name,
                    ...Object.values(fieldsSectionsToColumns(json.sections[0])),
                ];
                worksheet.addRow(fila);
            });

            const nombreArchivoTemp = 'datos_temp.xlsx';

            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=${nombreArchivoTemp}`);
            await workbook.xlsx.write(res); // Utilizar res para escribir directamente en la respuesta HTTP
        } catch (error) {
            console.error('Error al generar el archivo Excel:', error);
            res.status(500).send('Error al generar el archivo Excel');
        }

    }


}
