import {Middleware, Request} from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";

@Middleware()
export class AuthTokenMiddleware {
    use(@Request() request ) {
        const oauthToken = request.headers["x-access-token"];
        if (!oauthToken) {
            throw new Forbidden("Access forbidden - Bad token");
        }
    }
}
