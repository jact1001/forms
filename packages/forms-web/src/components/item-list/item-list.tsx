import './item-list.scss';
import {IItem} from "../../shared/models/iitems-list";
import {Item} from "../item/item";
import {useCustomTypedSelector} from "../../hooks/custom-typed-selector";
import {Error} from "../../shared/components/error/error";
import {Loader} from "../../shared/components/loader/loader";

export const ItemList = () => {

    const {items, loading, error} = useCustomTypedSelector((state: any) => state.items);
    return !loading ? items ? <div className="list">
        <ol className="list__list-wrapper">
            {items?.items.map((item: IItem) => {
                return <li key={item.id}><Item item={item}></Item></li>
            })}
        </ol>
    </div> : error ? <Error/> : null : <Loader/>

}
