import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FieldService} from "../services/field-service";
import {IFieldRepositoryPort} from "../ports/field-repository-port";

@Injectable()
@Scope('request')
export class FieldUseCase implements IFieldRepositoryPort, OnDestroy {

    constructor(private readonly fieldService: FieldService) {}

    public async getField(): Promise<any> {
        const data = this.fieldService.getField();
        //console.log('Use case: ', data);
        return data;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}