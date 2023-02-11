import './item-detail.scss';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useCustomTypedSelector} from "../../hooks/custom-typed-selector";
import {useDispatch} from "react-redux";
import {findItem} from "../../redux/effects/details.effect";
import {Error} from "../../shared/components/error/error";
import {Loader} from "../../shared/components/loader/loader";

export const ItemDetail = () => {

    const params: any = useParams();
    const dispatch = useDispatch();
    const {detail, loading} = useCustomTypedSelector((state: any) => state.detail);
    const item = detail ? detail.item : null;

    useEffect(() => {
        dispatch(findItem(params.id));
    }, []);

    return !loading ? item ? <div className="ml-item-detail">
        <div className="ml-item-detail__item-wrapper">
            <div className="ml-item-detail__product-detail">
                <img src={item?.picture} alt="imagen del producto" className="ml-item-detail__image"/>
                <div className="ml-item-detail__title-wrapper">
                    <p className="ml-item-detail__title-wrapper__sold">{item?.condition.toLowerCase() === 'new' ? "Nuevo " : "Usado "} - {item?.sold_quantity} vendidos</p>
                    <h2 className="ml-item-detail__title-wrapper__title">{item?.title}</h2>
                    <span
                        className="ml-item-detail__title-wrapper__price">$ {item?.price.amount.toLocaleString(navigator.language, {
                        minimumFractionDigits: 2,
                        currency: item?.price.currency,
                        style: 'decimal'
                    })}</span>
                    <button className="ml-item-detail__title-wrapper__button">Comprar</button>
                </div>
            </div>
            <div>
                {item?.description !== '' ? (
                    <div className="ml-item-detail__detail">
                        <h2 className="ml-item-detail__title-description">Descripción del producto</h2>
                        <p className="ml-item-detail__description">
                            {item?.description}
                        </p>
                    </div>) : <div className="ml-item-detail__description-empty"></div>}
            </div>
        </div>
    </div> : <Error/> : <Loader/>;
}
