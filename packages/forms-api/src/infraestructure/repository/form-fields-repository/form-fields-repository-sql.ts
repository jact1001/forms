import { Injectable, OnDestroy } from "@tsed/common";

import {IFormFieldsRepositoryPort} from "../../../core/ports/form-fields-ports/form-fields-repository-port";

@Injectable()
export class FormFieldsRepositorySQL implements IFormFieldsRepositoryPort, OnDestroy {

    public async findFormFields () {
      return null;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }

}
