import { Icon } from "../../atoms/Icon/indes"
import { Title } from "../../atoms/Title"

export interface IModalHeader{
    modalTitle: string;
    cancelAction: () => void;
}

export const ModalHeader = ( { ...props }: IModalHeader)=>{
    return (
        <div className="d-flex justify-content-between">
            <Title title={props.modalTitle}/>
            <Icon iconName="bi bi-x" onClick={props.cancelAction}/>
        </div>
    )
}