import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {FieldForm} from "../../core/domain/IField";

@Injectable()
export class FieldRepository implements OnDestroy {

    @Inject(FieldForm)
    private model: MongooseModel<FieldForm>;

    public async findField () {
        const list = await this.model.find().exec();
        console.log(list[0].toClass());
        return list;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }

}
