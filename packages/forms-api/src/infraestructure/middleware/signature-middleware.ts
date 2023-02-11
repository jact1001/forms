import {Req, Res} from "@tsed/common";
import {Context} from "@tsed/platform-params";
import {Middleware, MiddlewareMethods} from "@tsed/platform-middlewares";
import {Forbidden, Unauthorized} from "@tsed/exceptions";

@Middleware()
export class SignatureMiddleware implements MiddlewareMethods {
    public use(@Req() request: Req, @Context() ctx: Context, @Res() response: Res) {
        // retrieve options given to the @UseAuth decorator
        const options = ctx.endpoint.get(SignatureMiddleware) || {};
        console.log(response);

    }
}
