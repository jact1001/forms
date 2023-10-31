import { Context, Middleware, Request } from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";
import * as jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY || '';

@Middleware()
export class AuthTokenMiddleware {
    use(@Request() request, @Context() ctx: Context ) {
        const oauthToken = request.headers["x-access-token"];
        const email = jwt.verify(oauthToken, SECRET_KEY);
        ctx.set("email", email);
        if (!oauthToken) {
            throw new Forbidden("Access forbidden - Bad token");
        }
    }
}
