import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {ItemService} from "../services/item-service";
import IResult, {Guid} from "../../domain/IItem";
import {IApplicationPort} from "../ports/iapplication-port";

@Injectable()
@Scope('request')
export class ItemUseCase implements IApplicationPort, OnDestroy {

    constructor(private readonly itemService: ItemService) {
    }

    public async searchItems(keyWord: string): Promise<IResult> {
        return this.itemService.searchItems(keyWord);
    }

    public async getItem(itemId: Guid): Promise<any> {
        return this.itemService.getItem(itemId);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
