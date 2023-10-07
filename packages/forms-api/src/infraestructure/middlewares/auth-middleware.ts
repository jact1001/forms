import { Context, Middleware, Request } from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";
import * as jwt from 'jsonwebtoken';
const config = require("dotenv").config({path: "../../.env"});

@Middleware()
export class AuthTokenMiddleware {
    use(@Request() request, @Context() ctx: Context ) {
        const oauthToken = request.headers["x-access-token"];
        const email = jwt.verify(oauthToken, config.parsed.secret_key);
        ctx.set("email", email);
        if (!oauthToken) {
            throw new Forbidden("Access forbidden - Bad token");
        }
    }
}
