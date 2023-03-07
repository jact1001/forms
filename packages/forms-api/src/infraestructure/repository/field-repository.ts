import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Field} from "../../core/domain/IField";

@Injectable()
export class FieldRepository implements OnDestroy {
    
    @Inject(Field)
    private model: MongooseModel<Field>;

    public async findField () {
        const list = await this.model.find().exec();
        console.log(list[0].toClass());
        console.log('core/infraestructure/field-repository');
        return list;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }

}