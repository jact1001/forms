import { Inject, Injectable, OnDestroy } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { FormFields } from "./schemas/form-fields-schema";

@Injectable()
export class FormFieldsRepository implements OnDestroy {

    @Inject(FormFields)
    private model: MongooseModel<FormFields>;

    public async findFormFields () {
        const formFields = await this.model.find().exec();
        return formFields[0];
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }

}
