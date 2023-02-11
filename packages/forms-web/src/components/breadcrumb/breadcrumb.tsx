import {useLocation} from "react-router-dom";
import './breadcrumb.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useCustomTypedSelector} from "../../hooks/custom-typed-selector";

export const Breadcrumb = () => {

    const location = useLocation();
    const { items } = useCustomTypedSelector((state:any) => state.items);
    const categories = items ? items.categories : null;

    const createBreadCrumb = () =>{
        if(categories) {
            let items = categories.map((element : any, index : any)=>{
                return categories.length - 1 === index ? <span key={element}> {element} </span> : <span key={element}>{element} <ArrowForwardIosIcon style={{ fontSize: 10, marginLeft: 10, marginRight:10 }}/> </span>;
            });
            return items;
        }
    }
    if(location.pathname !== '/'){
        return (
            <div className="ml-breadcrumb">
                {createBreadCrumb()}
            </div>
        )
    } else {
        return (<div></div>);
    }
}
