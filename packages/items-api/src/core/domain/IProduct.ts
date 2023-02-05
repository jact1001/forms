export interface IProduct {
    id: string;
    title: string;
    currency_id: string;
    price: number;
    thumbnail_id: string;
    condition: string;
    shipping: IShipping;
    address: IAddress;
    pictures?: Array<IPicture>;
    sold_quantity?: number;
    seller_address?: IAddress;
}

interface IShipping {
    free_shipping: boolean;
    mode: string;
}

interface IAddress {
    state_name: string;
    state?: IState;
}

interface IPicture {
    state_name: string;
    url: string;
}

interface IState {
    name: string;
}
