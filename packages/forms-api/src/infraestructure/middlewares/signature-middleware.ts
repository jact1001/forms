import {Req, Res} from "@tsed/common";
import {Context} from "@tsed/platform-params";
import {Middleware, MiddlewareMethods} from "@tsed/platform-middlewares";

@Middleware()
export class SignatureMiddleware implements MiddlewareMethods {
    public use(@Req() request: Req, @Context() ctx: Context, @Res() response: Res) {
        ctx.endpoint.get(SignatureMiddleware);
    }
}
