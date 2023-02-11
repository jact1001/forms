import IResult, {Guid} from "../../domain/IItem";

export interface IApplicationPort {

    searchItems(keyWord: string): Promise<IResult>;

    getItem(itemId: Guid): Promise<any>;
}
