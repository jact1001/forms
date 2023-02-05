import {Link} from "react-router-dom";
import './item.scss';
import {IItem} from "../../shared/models/iitems-list";
import shippingLogo from '../../assets/ic_shipping.png';

export const Item = ({item}: {item: IItem}) =>{
    return (
        <div className="ml-item" key={item.id}>
            <div className="ml-item__image-wrapper">
                <Link to={`/items/${item.id}`}>
                    <img className="ml-item__image-wrapper--image" src={item.picture} alt={item.title} width="160" height="160"/>
                </Link>
            </div>
            <div className="ml-item__detail-wrapper">
                <p  className="ml-item__detail-wrapper__title">
                    <strong>$ {item.price.amount.toLocaleString(navigator.language, { currency: item.price.currency, style:'decimal'})}</strong>
                    {item.free_shipping ? <img src={shippingLogo} alt="free shipping"/>:null}
                </p>
                <Link to={`/items/${item.id}`}  className="ml-item__detail-wrapper__link">
                    <h2 className="ml-item__detail-wrapper__description">
                        {item.title}
                    </h2>
                </Link>
            </div>
            <div className="ml-item__address-wrapper">
                <address className="ml-item__item-address" >{item.address}</address>
            </div>
        </div>
    )
}
