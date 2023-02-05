import {IAuthor, IPrice} from "./iitems-list";

export interface IitemDetail {
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    address: string;
}

export interface IItem {
    author: IAuthor;
    item: IitemDetail;
}
