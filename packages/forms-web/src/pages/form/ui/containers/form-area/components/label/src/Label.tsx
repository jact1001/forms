import '../styles/label.scss';

const defaultClass = 'form-use-case-label';

interface ILabel {
    label:string;
}

export const Label = ({label}:ILabel) => {

    return (
        <div className={defaultClass}>
            {label}
        </div>
    )
}
