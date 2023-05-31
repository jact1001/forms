import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../drag-drop/item-types";
import './form-drop-area.scss';

export const FormDropArea = () => {

    // const [ drop ] = useDrop(
    //     () => ({
    //         accept: ItemTypes.DRAGINPUT,
    //         drop: () => ({name: `Dustbin`}),
    //         collect: (monitor: any) => {
    //             // isOver: monitor.isOver();
    //             console.log('monitor', monitor);
    //             const dropResult = monitor.getDropResult() as any;
    //             console.log('result', dropResult)
    //         },
    //     }),
    // );

    const [ {canDrop, isOver}, drop ] = useDrop(() => ({
        accept: ItemTypes.DRAGINPUT,
        drop: () => ({ name: 'Drop-area' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            
            // isOver: !!monitor.isOver()  
        }),
    }));

    return (
        <div ref={ drop } className="drop-area">
            <h1>This Drop Area</h1>
            <p>{  }</p>
        </div>
    )
}
