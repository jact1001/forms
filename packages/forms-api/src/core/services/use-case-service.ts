import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UseCaseRepository } from "../../infraestructure/repository/use-case-repository/use-case-repository";
import { IUseCase } from "../domain/use-case";

@Injectable()
@Scope('request')
export class UseCaseService implements OnDestroy {

    constructor(
        private readonly useCaseRepository: UseCaseRepository
    ) {}

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        return await this.useCaseRepository.saveUseCase(useCase);
    }

    public async updateUseCase(useCase: IUseCase): Promise<IUseCase> {
        return await this.useCaseRepository.updateUseCase(useCase);
    }

    public async getUseCasesByUseCaseId(caseId: string): Promise<IUseCase> {
        return await this.useCaseRepository.findUseCase(caseId);
    }

    public async getUseCasesByFormId(formId: string): Promise<IUseCase[]> {
        return await this.useCaseRepository.findUseCasesByFormId(formId);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
