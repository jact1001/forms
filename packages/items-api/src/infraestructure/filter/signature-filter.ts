import {ResponseFilter, Context, ResponseFilterMethods} from "@tsed/common";

@ResponseFilter("*/*")
export class SignatureResponseFilter implements ResponseFilterMethods {
    transform(data: any, ctx: Context) {
        let signature = {
            author: {
                name: 'Ivan',
                lastname: 'Taimal'
            }
        }
        return {...signature, ...data};
    }
}
