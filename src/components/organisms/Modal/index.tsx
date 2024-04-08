import { IModalHeader, ModalHeader } from "../../molecules/ModalHeader";
import { IModalFooter, ModalFooter } from "../../molecules/ModalFooter";
import { Card } from "../../atoms/Card";

import './styles.css'

export interface IModal extends IModalHeader, IModalFooter {
    children?: React.ReactNode;
    loading: boolean;
    modalTitle: string;
}

export const Modal = ( {...props}: IModal)=>{
    return(
        <div className="Background">
            <div className="Modal">
                <Card>
                    <ModalHeader
                        modalTitle={props.modalTitle}
                        cancelAction={props.cancelAction}
                    />
                        {props.children}
                    <ModalFooter
                        cancelAction={props.cancelAction}
                        cancelButtonLabel={props.cancelButtonLabel}
                        confirmAction={props.confirmAction}
                        confirmButtonLabel={props.confirmButtonLabel}
                        loading={props.loading}
                    />
                </Card>
            </div>
        </div>
    )
}