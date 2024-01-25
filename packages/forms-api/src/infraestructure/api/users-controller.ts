import {Context, Controller, Get, Post, Request, Response, UseBefore} from "@tsed/common";
import { IUser } from "../../core/domain/user";
import { UsersUseCase } from "../../core/use-cases/users-use-case";
import { Response as ExpressResponse } from "express";
import { OAuth2Client } from "google-auth-library";
import * as jwt from 'jsonwebtoken';
import {AuthTokenMiddleware} from "../middlewares/auth-middleware";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const SECRET_KEY = process.env.SECRET_KEY || '';

@Controller("/users")
export class UsersController {

    public constructor(private readonly _usersUseCase: UsersUseCase) {}
    private googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

    @UseBefore(AuthTokenMiddleware)
    @Get("/")
    async getUsers(@Context() ctx: Context): Promise<IUser[]> {
        const email = ctx.get("email");
        return await this._usersUseCase.getUsers(email);
    }

    @Post("/login")
    async login(@Request() request, @Context() ctx: Context, @Response() res: ExpressResponse): Promise<any> {
        const token = request.headers["authorization"].split(" ")[1];
        try {
            const ticket = await this.googleClient.verifyIdToken({
                idToken: token,
                audience:GOOGLE_CLIENT_ID,
            });
            const { email, name, family_name } = ticket.getPayload();
            const loginToken = jwt.sign(`${email}`, SECRET_KEY);
            await this._usersUseCase.saveUser({ email: email, user_name: name, last_name: family_name });
            res.cookie("login", loginToken, {
                httpOnly: true,
                maxAge: 3600000,
            });
            return res.status(200).json({success: true, session: loginToken});
        } catch (error) {-
            console.log('Token:', token);
            console.log('GOOGLE_CLIENT_ID:', GOOGLE_CLIENT_ID);
            return res.status(403).json({ error: 'Token invalido. ' + error });
        }
    }

    @UseBefore(AuthTokenMiddleware)
    @Get("/logout")
    async logout(@Request() request, @Context() ctx: Context, @Response() res: ExpressResponse): Promise<any> {
        try {
            ctx.delete("auth");
            return res.status(200).json('success');
        } catch (error) {
            return res.status(501).json({ error: 'error' });
        }
    }
}
