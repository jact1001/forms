import { Inject, Injectable, OnDestroy } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { UserForms } from "./user-forms-schema";
import { IUserFormsRepositoryPort } from "../../../core/ports/user-forms-ports/user-forms-repository-port";
import { IFormCase, IUserForms } from "../../../core/domain/user-forms";

@Injectable()
export class UserFormsRepository implements IUserFormsRepositoryPort, OnDestroy {
    @Inject(UserForms)
    private model: MongooseModel<UserForms>;

    public async saveUserForms (userForms: IUserForms) {
        const newUserForms = new this.model(userForms);
        return newUserForms.save();
    }

    public async findUserForms (email: string) {
        return await this.model.findOne({email: email}).exec();
    }

    public async addUseCase (formCase: IFormCase, formId: string, email: string) {

        const formCaseTest = await this.model.findOne({'user_id': email});

        const form = formCaseTest.forms.find((form) => form.form_id === formId);
        form.cases.push(formCase);

        await formCaseTest.save();

        return formCaseTest;

    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
