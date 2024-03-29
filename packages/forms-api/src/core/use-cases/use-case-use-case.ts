import {OnDestroy} from "@tsed/common";
import {IUseCasePort} from "../ports/use-case-ports/use-case-port";
import {IUseCase} from "../domain/use-case";
import {IForm} from "../domain/form";
import {IUseCaseService} from "../services/i-use-case-service";
import {IFormCase, IUserForms} from "../domain/user-forms";

export class UseCaseUseCase implements IUseCasePort, OnDestroy {

    constructor(private readonly useCaseService: IUseCaseService) {
    }

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        return this.useCaseService.saveUseCase(useCase);
    }

    public async createCase(data: IUseCase, email: string): Promise<IUseCase> {
        return this.useCaseService.createCase(data, email);
    }

    public async updateUseCase(useCase: IUseCase, email: string): Promise<IUseCase> {
        return this.useCaseService.updateUseCase(useCase, email);
    }

    public async getUseCasesByUseCaseId(caseId: string, email: string): Promise<IUseCase> {
        return this.useCaseService.getUseCaseByUseCaseId(caseId, email);
    }

    public async getUseCasesByFormId(formId: string): Promise<IUseCase[]> {
        return this.useCaseService.getUseCasesByFormId(formId);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
