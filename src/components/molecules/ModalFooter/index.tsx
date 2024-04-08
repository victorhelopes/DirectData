import { Button } from "react-bootstrap";
import { Loading } from "../../atoms/Loading";

export interface IModalFooter{
    cancelButtonLabel: string;
    confirmButtonLabel: string;
    cancelAction: () => void;
    confirmAction: () => void;
    loading: boolean;
}

export const ModalFooter = ( { ...props }: IModalFooter)=>{
    return (
        <div className="d-flex aling-center justify-content-center">
            <Button 
                className="me-3"
                variant="outline-danger"
                onClick={props.cancelAction}
            >
                {props.loading?
                    <Loading/>  
                    :
                    props.cancelButtonLabel
                }
            </Button>
            <Button 
                variant="success"
                onClick={props.confirmAction}
            >
                
                {props.loading?
                    <Loading/>  
                :
                    props.confirmButtonLabel
                }
            </Button>
        </div>
    )
}