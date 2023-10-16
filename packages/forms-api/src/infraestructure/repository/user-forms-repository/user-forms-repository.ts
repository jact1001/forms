import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {UserForms} from "./user-forms-schema";
import {IUserFormsRepositoryPort} from "../../../core/ports/user-forms-ports/user-forms-repository-port";
import {IFormCase, IUserForms} from "../../../core/domain/user-forms";
import {IForm} from "../../../core/domain/form";

@Injectable()
export class UserFormsRepository implements IUserFormsRepositoryPort, OnDestroy {
    @Inject(UserForms)
    private model: MongooseModel<UserForms>;

    public async saveUserForms (form: IForm, email: string) {
        const userForms = await this.model.findOne({ 'user_id': email });
        if (!userForms) {
            const newUserForms = new this.model({
                'user_id': email,
                forms: [{ form_id: form.id, form_name: form.form_name, cases: [] }]
            });
            await newUserForms.save();
            return newUserForms;
        }
        const existingForm = userForms.forms.find((f) => f.form_id === form.id.toString());
        if (!existingForm) {
            userForms.forms.push({
                form_id: form.id,
                form_name: form.form_name,
                cases: []
            });
            await userForms.save();
        }
        return userForms;
    }

    public async createUserForms (userForms: IUserForms) {
        const newUserForms = new this.model(userForms);
        return newUserForms.save();
    }

    public async findUserForms (email: string) {
        return await this.model.findOne({email: email}).exec();
    }

    public async addUseCase (formCase: IFormCase, formId: string, email: string) {
        const userForms = await this.model.findOne({'user_id': email});
        const form = userForms.forms.find((form) => form.form_id === formId);
        form.cases.push(formCase);
        await userForms.save();
        return userForms;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
