import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Test} from "../../core/domain/ITest";
import {IForm} from "../../core/domain/IForm";

@Injectable()
export class FormRepository implements OnDestroy {
    @Inject(Test)
    private model: MongooseModel<Test>;

    public async findForm () {
        const list = await this.model.find().exec();

        console.log('ejecutando consulta');

        console.log(list); // Model { Product }
        //console.log(list[0].toClass()); // Product {}

        return list;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
