export interface IAuthor {
    lastname: string;
    name: string;
}

export interface IPrice {
    currency: string;
    amount: number;
    decimals?: number;
}

export interface IItem {
    address: string;
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: IPrice;
    title: string;
}

export interface IItemList {
    author: IAuthor;
    categories: string[];
    items: IItem[];
}
