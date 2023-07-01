import { Inject, Injectable, OnDestroy } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Form } from "./schemas/forms-schema";

@Injectable()
export class FormsRepository implements OnDestroy {
    @Inject(Form)
    private model: MongooseModel<Form>;

    public async findForms () {
        const forms = await this.model.find().exec();
        return forms;
    }

    public async saveForm (form: Form) {
        const newForm = new this.model(form);
        await newForm.save();
        return form;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
