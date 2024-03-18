import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {UseCase} from "./use-case-schema";
import {IUseCaseRepositoryPort} from "../../../core/ports/use-case-ports/use-case-repository-port";
import {IUseCase} from "../../../core/domain/use-case";

@Injectable()
export class UseCaseRepository implements IUseCaseRepositoryPort, OnDestroy {
    @Inject(UseCase)
    private model: MongooseModel<UseCase>;

    public async findUseCase (useCaseId: string, email: string) {
        return  await this.model.findOne({ id: useCaseId }).exec();
    }

    public async findUseCasesByFormId (formId: string) {
        return  await this.model.find({ form_id: formId.toString() }).exec();
    }

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        try {
            const newForm = new this.model(useCase);
            return await newForm.save();
        } catch (error) {
            console.log('data con error:', useCase);
            throw new Error(`Error al guardar el caso de uso: ${error}`);
        }
    }

    public async updateUseCase (useCase: IUseCase) {
        try {
            return await this.model.findOneAndUpdate(
                {id: useCase.id},
                {$set: useCase},
                {new: true}
            ).exec();
        } catch (error) {
            console.log('data con error:', useCase);
            throw new Error(`Error al guardar el caso de uso: ${error}`);
        }
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
