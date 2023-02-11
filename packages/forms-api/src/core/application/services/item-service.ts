import {Injectable, OnDestroy, Scope} from "@tsed/common";
import IResult, {DetailedItem, Guid, IItemResult, Item} from "../../domain/IItem";
import {Pipeline} from "../../commons/pipeline";
import {ItemRepository} from "../../../infraestructure/repository/item-repository";


@Injectable()
@Scope('request')
export class ItemService implements OnDestroy {

    constructor(private readonly itemRepository: ItemRepository) {
    }

    public async searchItems(keyWord: string): Promise<IResult> {
        let result: IResult = {
            categories: [],
            items: []
        };
        const data = await this.itemRepository.searchItems(keyWord);
        if (data.results.length > 0) {
            let a = new Pipeline<IResult>(result);
            result = a.throughFunctions(
                n => {
                    return {...n, categories: this.includeCategories(data.filters)};
                },
                n => {
                    return {...n, items: this.buildItems(data.results)};
                }
            ).return()
        }
        return result;
    }

    public async getItem(itemId: Guid): Promise<any> {
        const result: IItemResult = {
            item: null,
        }
        const data = await this.itemRepository.getItem(itemId);
        const description = await this.itemRepository.getItemDescription(itemId);
        result.item = new DetailedItem(data, description.plain_text);
        return result;
    }

    private includeCategories(filters: any) {
        return filters.length > 0 ? filters[0].values[0].path_from_root.map((category: any) => {
            return category.name
        }) : []
    }

    private buildItems(products: any) {
        const items: Array<Item> = [];
        for (const product of products) {
            items.push(new Item(products[0]));
        }
        return items;
    }


    $onDestroy() {
        console.log('Service destroyed');
    }
}
