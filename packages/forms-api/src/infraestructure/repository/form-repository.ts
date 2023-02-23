import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Form} from "../../core/domain/IForm";

@Injectable()
export class FormRepository implements OnDestroy {
    @Inject(Form)
    private model: MongooseModel<Form>;

    public async findForm () {
        const list = await this.model.find().exec();
        console.log(list[0].toClass());
        return list;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
