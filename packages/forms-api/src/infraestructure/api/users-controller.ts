import { UsersRepositorySQL } from './../repository/users-repository/users-repository-sql';
import {Context, Controller, Get, Post, Request, Response, UseBefore} from "@tsed/common";
import {IUser} from "../../core/domain/user";
import {UsersUseCase} from "../../core/use-cases/users-use-case";
import {Response as ExpressResponse} from "express";
import {OAuth2Client} from "google-auth-library";
import * as jwt from 'jsonwebtoken';
import {AuthTokenMiddleware} from "../middlewares/auth-middleware";
import {IUserApiPort} from "../../core/ports/users-ports/users-api-port";
import {UsersRepository} from "../repository/users-repository/users-repository";
import {UsersService} from "../../core/services/impl/users-service";
import {FormsRepository} from "../repository/forms-repository/forms-repository";
import {UserFormsRepository} from "../repository/user-forms-repository/user-forms-repository";
import {UseCaseRepository} from "../repository/use-case-repository/use-case-repository";
import { FormsRepositorySQL } from '../repository/forms-repository/forms-repository-sql';
import { UserFormsRepositorySQL } from '../repository/user-forms-repository/user-forms-repository-sql';
import { UseCaseRepositorySQL } from '../repository/use-case-repository/use-case-repository-sql';
import { GroupSql } from '../util/groups-sql';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const SECRET_KEY = process.env.SECRET_KEY || '';

@Controller("/users")
export class UsersController {

    private _usersUseCase: IUserApiPort;
    private _usersUseCaseSql: IUserApiPort;

    public constructor(private usersRepository: UsersRepository,
                       private formRepository: FormsRepository,
                       private userFormsRepository: UserFormsRepository,
                       private caseRepository: UseCaseRepository,
                       private formRepositorySql: FormsRepositorySQL,
                       private userRepositorySql: UsersRepositorySQL,
                       private userFormsRepositorySql: UserFormsRepositorySQL,
                       private caseRepositorySql: UseCaseRepositorySQL
    ) {
        const userService = new UsersService(this.usersRepository, userFormsRepository, caseRepository, formRepository);
        this._usersUseCase = new UsersUseCase(userService);

        const userServiceSql = new UsersService(this.userRepositorySql, this.userFormsRepositorySql, this.caseRepositorySql, this.formRepositorySql);
        this._usersUseCaseSql = new UsersUseCase(userServiceSql);
    }

    private googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);


    private handlerUserCase (email: string): IUserApiPort {
        if (GroupSql.belongsToGroupSql(email)) return this._usersUseCaseSql;
        return this._usersUseCase;
    }

    @UseBefore(AuthTokenMiddleware)
    @Get("/")
    async getUsers(@Context() ctx: Context): Promise<IUser[]> {
        const email = ctx.get("email");
        return await this.handlerUserCase(email).getUsers(email);
    }

    @Post("/login")
    async login(@Request() request, @Context() ctx: Context, @Response() res: ExpressResponse): Promise<any> {
        const token = request.headers["authorization"].split(" ")[1];
        let loginToken: any = "empty";
        try {
            const ticket = await this.googleClient.verifyIdToken({
                idToken: token,
                audience: GOOGLE_CLIENT_ID,
            });
            const {email, name, family_name} = ticket.getPayload();
            loginToken = jwt.sign(`${email}`, SECRET_KEY);

            const payload = {email: email, user_name: name, last_name: family_name};
            await this.handlerUserCase(email).saveUser(payload);

            res.cookie("login", loginToken, {
                httpOnly: true,
                maxAge: 3600000,
            });
            return res.status(200).json({success: true, session: loginToken});
        } catch (error) {
            return res.status(403).json(
                {
                    error: 'Token invalido. ' + error
                }
            );
        }
    }

    @UseBefore(AuthTokenMiddleware)
    @Get("/logout")
    async logout(@Request() request, @Context() ctx: Context, @Response() res: ExpressResponse): Promise<any> {
        try {
            ctx.delete("auth");
            return res.status(200).json('success');
        } catch (error) {
            return res.status(501).json({error: 'error'});
        }
    }
}
