//import {IItem} from "./IItem";

 class ProductMapper {
    constructor() {
    }

      static ProductToItem(product: IProduct, description: string) {
        /*const item: IItem = {
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency_id,
                amount: product.price,
            },
            picture: product.pictures[0].url,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            sold_quantity: product.sold_quantity,
            description: description,
            address: product.seller_address.state.name
        }*/
        return null;
    }

     static ProductToListItem(product: IProduct) {
       /* const item: IItem = {
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency_id,
                amount: product.price,
            },
            picture: `https://http2.mlstatic.com/D_Q_NP_${product.thumbnail_id}-Q.webp`,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            address: product.address.state_name
        }*/
        return null;
    }
}
