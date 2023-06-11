import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Form} from "../../core/domain/IForm";



@Injectable()
export class FormRepository implements OnDestroy {
    @Inject(Form)
    private model: MongooseModel<Form>;

    public async findForm () {
        const list = await this.model.find().exec();
        return list;
    }

    public async saveForm (form: Form) {
        const newUser = new this.model(form);
        await newUser.save();
        return 'exitoso';
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
