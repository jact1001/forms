import './form-drop-area.scss';
import { useDrop } from "react-dnd";

export const FormDropArea = () => {

    const [ drop ] = useDrop(
        () => ({
            accept: 'drag-input',
            drop: () => ({name: `Dustbin`}),
            collect: (monitor: any) => {
                console.log(monitor);
                const dropResult = monitor.getDropResult() as any;
                console.log('result', dropResult)
            },
        }),
    );

    return (
        <h1 className='drop-area'>This Drop Area {drop}</h1>
    )
}
