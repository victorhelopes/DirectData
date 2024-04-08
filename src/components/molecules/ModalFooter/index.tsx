import { Button } from "react-bootstrap";

export interface IModalFooter{
    cancelButtonLabel: string;
    confirmButtonLabel: string;
    cancelAction: () => void;
    confirmAction: () => void;
}

export const ModalFooter = ( { ...props }: IModalFooter)=>{
    return (
        <div className="d-flex aling-center justify-content-center">
            <Button 
                className="me-3"
                variant="outline-danger"
                onClick={props.cancelAction}
            >
                {props.cancelButtonLabel}
            </Button>
            <Button 
                variant="success"
                onClick={props.confirmAction}
            >
                {props.confirmButtonLabel}
            </Button>
        </div>
    )
}