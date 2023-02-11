import {IProduct} from "./IProduct";

interface IAuthor {
    name: string;
    lastname: string;
}

interface IPrice {
    currency: string;
    amount: number;
    decimals?: number;
}

export interface IItem {
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: boolean
    sold_quantity?: number;
    description?: string;
    address: string;
}


export class Item implements IItem {
    address: string;
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: IPrice;
    title: string;

    constructor(product: IProduct) {
        this.id = product.id;
        this.title = product.title;
        this.price = {
            currency: product.currency_id,
            amount: product.price,
        };
        this.picture = `https://http2.mlstatic.com/D_Q_NP_${product.thumbnail_id}-Q.webp`;
        this.condition = product.condition;
        this.free_shipping = product.shipping.free_shipping;
        this.address = product.address?.state_name;
    }
}

export class DetailedItem extends Item {
    sold_quantity: number;
    description: string;

    constructor(product: IProduct, description: string) {
        super(product);
        this.picture = product.pictures[0].url;
        this.sold_quantity = product.sold_quantity;
        this.description = description;
    }
}


export interface IItemResult {
    author?: IAuthor;
    item: IItem | null;
}

export default interface IResult {
    author?: IAuthor;
    categories?: string[];
    items: IItem[];
}

export interface Guid extends String {
    toString(): string;
}
