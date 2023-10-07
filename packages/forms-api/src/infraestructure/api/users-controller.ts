import { BodyParams, Context, Controller, Get, Post, Request, Response } from "@tsed/common";
import { IUser } from "../../core/domain/user";
import { UsersUseCase } from "../../core/use-cases/users-use-case";
import { Response as ExpressResponse } from "express";
import { OAuth2Client } from "google-auth-library";
import * as jwt from 'jsonwebtoken';
const config = require("dotenv").config({path: "../../.env"});

@Controller("/users")
export class UsersController {

    public constructor(private readonly _usersUseCase: UsersUseCase) {}
    private googleClient = new OAuth2Client(config.parsed.client_id);

    @Get("/")
    async getUsers(): Promise<IUser[]> {
        return await this._usersUseCase.getUsers();
    }

    @Post("/login")
    async login(@Request() request, @Context() ctx: Context, @Response() res: ExpressResponse): Promise<any> {
        const token = request.headers["authorization"].split(" ")[1];
        try {
            const ticket = await this.googleClient.verifyIdToken({
                idToken: token,
                audience: config.parsed.client_id,
            });
            const { email, name, family_name } = ticket.getPayload();
            const loginToken = jwt.sign(`${email}`, config.parsed.secret_key);
            await this._usersUseCase.saveUser({ email: email, user_name: name, last_name: family_name });
            res.cookie("login", loginToken, {
                httpOnly: true,
                maxAge: 3600000,
            });
            return res.status(200).json({success: true, session: loginToken});
        } catch (error) {
            return res.status(501).json({ error: 'Token invalido' });
        }
    }

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
