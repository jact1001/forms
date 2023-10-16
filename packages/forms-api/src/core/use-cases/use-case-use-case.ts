import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {UseCaseService} from "../services/use-case-service";
import {IUseCasePort} from "../ports/use-case-ports/use-case-port";
import {IUseCase} from "../domain/use-case";

@Injectable()
@Scope('request')
export class UseCaseUseCase implements IUseCasePort, OnDestroy {

    constructor(private readonly useCaseService: UseCaseService) {}

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        return this.useCaseService.saveUseCase(useCase);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
