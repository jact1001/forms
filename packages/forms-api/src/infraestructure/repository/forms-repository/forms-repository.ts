import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Form} from "./forms-schema";
import {IFormRepositoryPort} from "../../../core/ports/forms-ports/forms-repository-port";
import {IForm} from "../../../core/domain/form";

@Injectable()
export class FormsRepository implements IFormRepositoryPort, OnDestroy {
    @Inject(Form)
    private model: MongooseModel<Form>;

    public async findForms () {
        return await this.model.find().exec();
    }

    public async findForm (formId: string) {
        return await this.model.findOne({id: formId}).exec();
    }

    public async saveForm (form: IForm) {
        const newForm = new this.model(form);
        return await newForm.save();
    }

    public async updateForm (form: IForm) {
        const formUpdated = await this.model.findOneAndUpdate(
            { id: form.id },
            { $set: form },
            { new: true }
        ).exec();
        return formUpdated;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
