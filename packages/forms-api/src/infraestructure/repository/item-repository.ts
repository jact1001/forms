import {Injectable, OnDestroy, Scope} from "@tsed/common";
import IItems from "../../core/domain/IItem";
import https from "https";
import axios from "axios";
import {IItemRepositoryPort} from "../../core/application/ports/iitem-repository-port";

const clientAxios = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

@Injectable()
@Scope('request')
export class ItemRepository implements  OnDestroy {

    constructor() {
    }

    public async searchItems(keyWord: string): Promise<any> {

        const {data} = await clientAxios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${keyWord}`);

        return data;
    }

    public async getItem(itemId): Promise<any> {
        return await clientAxios.get(`https://api.mercadolibre.com//items/${itemId}`).then(response => response.data);
    }

    public async getItemDescription(itemId): Promise<any> {
        return await clientAxios.get(`https://api.mercadolibre.com//items/${itemId}/description`).then(response => response.data);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
