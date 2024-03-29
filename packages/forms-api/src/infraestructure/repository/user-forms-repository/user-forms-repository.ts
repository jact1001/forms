import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {UserForms} from "./user-forms-schema";
import {IUserFormsRepositoryPort} from "../../../core/ports/user-forms-ports/user-forms-repository-port";
import {IFormCase, IUserForm} from "../../../core/domain/user-forms";
import {IForm} from "../../../core/domain/form";

@Injectable()
export class UserFormsRepository implements IUserFormsRepositoryPort, OnDestroy {
    @Inject(UserForms)
    private model: MongooseModel<UserForms>;

    public async saveUserForm (email: string, userForm: IUserForm ) {
        const userForms = await this.model.findOne({ 'user_id': email });
        if (!userForms) {
            const newUserForms = new this.model({'user_id': email, forms: [userForm]});
            await newUserForms.save();
            return newUserForms;
        }
        const existingFormPosition = userForms.forms.findIndex((f) => f.form_id === userForm.form_id.toString());
        if (existingFormPosition === -1) {
            userForms.forms.push(userForm);
            await userForms.save();
        } else {
            userForms.forms[existingFormPosition] = userForm;
            await userForms.save();
        }

        return userForms;
    }

    public async addUseCaseDeprecated (formCase: IFormCase, formId: string, email: string) {
        const userForms = await this.model.findOne({'user_id': email});
        if (userForms) {
            const form = userForms.forms.find((form) => form.form_id === formId);
            if (form) {
                form.cases.push(formCase);
                await userForms.save();
            }
        }
        return userForms;
    }

    public async addUseCase(formCase: IFormCase, formId: string, email: string) {
        const updatedUserForms = await this.model.findOneAndUpdate(
            { 'user_id': email, 'forms.form_id': formId },
            { $push: { 'forms.$.cases': formCase } },
            { new: true }
        ).exec();

        return updatedUserForms;
    }

    public async findUserForms (email: string) {
        return await this.model.findOne({'user_id': email}).exec();
    }

    public async updateUseCaseDeprecated (formCase: IFormCase, formId: string, email: string) {
        const userForms = await this.model.findOne({'user_id': email});
        userForms.forms = userForms.forms.map((form) => {
            if (form.form_id === formId) {
                return {
                    ...form,
                    cases: form.cases.map((useCase: IFormCase) => {
                        if (formCase.case_id === useCase.case_id){
                            return formCase;
                        }
                        return useCase;
                    })
                }
            }
            return form;
        });
        await userForms.save();
        return userForms;
    }


    public async updateUseCase(formCase: IFormCase, formId: string, email: string) {
        const updatedUserForms = await this.model.findOneAndUpdate(
            { 'user_id': email, 'forms.form_id': formId, 'forms.cases.case_id': formCase.case_id },
            { $set: { 'forms.$[outer].cases.$[inner]': formCase } },
            { arrayFilters: [{ 'outer.form_id': formId }, { 'inner.case_id': formCase.case_id }], new: true }
        ).exec();

        return updatedUserForms;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
