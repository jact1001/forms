import {Controller, Get, PathParams, QueryParams} from "@tsed/common";
import IResult , {Guid} from "../../core/domain/IItem";
import {ItemUseCase} from "../../core/application/use-cases/item-use-case";

@Controller("/items")
export class ItemController {

    public constructor(private readonly _itemUseCase: ItemUseCase) {
    }

    @Get("/")
    async getItems(@QueryParams("q") key: string,): Promise<IResult> {
        return await this._itemUseCase.searchItems(key);
    }

    @Get("/:itemId")
    async getItemDetail(@PathParams("itemId") itemId: Guid): Promise<any> {
        return await this._itemUseCase.getItem(itemId);
    }

}
