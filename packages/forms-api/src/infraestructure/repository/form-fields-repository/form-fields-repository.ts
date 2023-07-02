import { Inject, Injectable, OnDestroy } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { FormFields } from "./form-fields-schema";
import {IFormFieldsRepositoryPort} from "../../../core/ports/form-fields-ports/form-fields-repository-port";

@Injectable()
export class FormFieldsRepository implements IFormFieldsRepositoryPort, OnDestroy {

    @Inject(FormFields)
    private model: MongooseModel<FormFields>;

    public async findFormFields () {
        const formFields = await this.model.find().exec();
        return formFields;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }

}
