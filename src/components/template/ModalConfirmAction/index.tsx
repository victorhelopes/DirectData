import { IModal, Modal } from "../../organisms/Modal"

interface IModalConfirmAction extends IModal {}

export const ModalConfirmAction = ({ ...props}: IModalConfirmAction) =>{
    return(
        <Modal 
            cancelAction={props.cancelAction}
            cancelButtonLabel={props.cancelButtonLabel}
            confirmAction={props.confirmAction}
            confirmButtonLabel={props.confirmButtonLabel}
            modalTitle={props.modalTitle}
            loading={props.loading}
        >
            <p>Você tem certeza que deseja alterar esses dados?</p>
        </Modal>
    )
}