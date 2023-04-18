import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FieldRepository} from "../../../infraestructure/repository/field-repository";

@Injectable()
@Scope('request')
export class FieldService implements OnDestroy {

    constructor(private readonly fieldRepository: FieldRepository) {}

    public async getField(): Promise<any> {
        const data = await this.fieldRepository.findField();
        return data;
    }

    $onDestroy() {
        console.log('Field service destroyed');
    }

}
