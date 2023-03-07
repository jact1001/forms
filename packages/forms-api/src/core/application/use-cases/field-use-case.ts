import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FieldService} from "../services/field-service";
import {IFieldRepositoryPort} from "../ports/field-repository-port";

@Injectable()
@Scope('request')
export class FieldUseCase implements IFieldRepositoryPort, OnDestroy {

    constructor(private readonly fieldService: FieldService) {}

    public async getField(): Promise<any> {
        return this.fieldService.getField();
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}