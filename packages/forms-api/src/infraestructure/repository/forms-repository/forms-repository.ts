import { Inject, Injectable, OnDestroy } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Form } from "./forms-schema";
import { IFormRepositoryPort } from "../../../core/ports/forms-ports/forms-repository-port";
import { IForm } from "../../../core/domain/form";

@Injectable()
export class FormsRepository implements IFormRepositoryPort, OnDestroy {
    @Inject(Form)
    private model: MongooseModel<Form>;

    public async findForms () {
        const forms = await this.model.find().exec();
        return forms;
    }

    public async saveForm (form: IForm) {
        const newForm = new this.model(form);
        return await newForm.save();
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
