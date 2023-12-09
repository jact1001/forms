import {BodyParams, Context, Controller, Get, PathParams, Post, Response, UseBefore} from "@tsed/common";
import { IUserForms } from "../../core/domain/user-forms";
import { UserFormsUseCase } from "../../core/use-cases/user-forms-use-case";
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import { Response as ExpressResponse } from "express";
import * as ExcelJS from 'exceljs';

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
            const useCases = await this._userFormsUseCase.exportUseCasesByFormId(formId, email);
            // Crear un nuevo libro de Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Datos');

            // Función para convertir los campos de las secciones en columnas
            const convertirSeccionesEnColumnas = (section) => {
                const columnas = {};
                section.fields.forEach((field) => {
                    columnas[field.label] = field.value;
                });
                return columnas;
            }

            // Encabezados de columna basados en los campos de la primera sección
            const primerSeccion = useCases[0].sections[0];
            const encabezados = primerSeccion.fields.map(field => field.label);

            // Agregar encabezados a la hoja de cálculo
            worksheet.addRow(['Case Name', 'Case State', ...encabezados]);

            // Agregar datos de cada JSON como una fila en la hoja de cálculo
            useCases.forEach((json) => {
                const fila = [
                    json.case_name,
                    json.case_state.name,
                    ...Object.values(convertirSeccionesEnColumnas(json.sections[0])),
                ];
                worksheet.addRow(fila);
            });

            // Guardar el libro de Excel en un archivo temporal
            const nombreArchivoTemp = 'datos_temp.xlsx';

            // Enviar el libro de Excel como respuesta
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=${nombreArchivoTemp}`);
            await workbook.xlsx.write(res); // Utilizar res para escribir directamente en la respuesta HTTP
        } catch (error) {
            console.error('Error al generar el archivo Excel:', error);
            res.status(500).send('Error al generar el archivo Excel');
        }

    }


}
