import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {UseCaseService} from "../services/use-case-service";
import {IUseCasePort} from "../ports/use-case-ports/use-case-port";
import {IUseCase} from "../domain/use-case";
import {IForm} from "../domain/form";

@Injectable()
@Scope('request')
export class UseCaseUseCase implements IUseCasePort, OnDestroy {

    constructor(private readonly useCaseService: UseCaseService) {}

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        return this.useCaseService.saveUseCase(useCase);
    }

    public async updateUseCase(useCase: IUseCase, email: string): Promise<IUseCase> {
        return this.useCaseService.updateUseCase(useCase, email);
    }

    public async getUseCasesByUseCaseId(caseId: string, email: string): Promise<IUseCase> {
        return this.useCaseService.getUseCasesByUseCaseId(caseId, email);
    }

    public async getUseCasesByFormId(formId: string): Promise<IUseCase[]> {
        return this.useCaseService.getUseCasesByFormId(formId);
    }

    public async updateFormUseCases(form: IForm, email: string): Promise<IUseCase[]> {
        return this.useCaseService.updateFormUseCases(form, email);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
