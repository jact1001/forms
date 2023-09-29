import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {UseCase} from "./use-case-schema";
import {IUseCaseRepositoryPort} from "../../../core/ports/use-case-ports/use-case-repository-port";
import {IUseCase} from "../../../core/domain/use-case";

@Injectable()
export class UseCaseRepository implements IUseCaseRepositoryPort, OnDestroy {
    @Inject(UseCase)
    private model: MongooseModel<UseCase>;

    public async findUseCase (useCaseId: string) {
        return  await this.model.findOne({ id: useCaseId }).exec();
    }

    public async saveUseCase (useCase: IUseCase) {
        const newForm = new this.model(useCase);
        return await newForm.save();
    }

    public async updateUseCase (useCase: IUseCase) {
        return await this.model.findOneAndUpdate(
            {id: useCase._id},
            {$set: useCase},
            {new: true}
        ).exec();
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
