import {ResponseFilter, Context, ResponseFilterMethods} from "@tsed/common";

@ResponseFilter("*/*")
export class SignatureResponseFilter implements ResponseFilterMethods {
    transform(data: any, ctx: Context) {
        let signature = {
            author: {
                name: 'Johnny',
                lastname: 'Chinchajoa'
            }
        }
        return {...signature, content: data};
    }
}
