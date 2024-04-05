import { Toast } from "react-bootstrap"

import './styles.css'

interface IToast{
    show: boolean;
    message: string;
    setShow: (value: boolean)=> void;
}

export const ToastCoomponent = ( { ...props }: IToast)=>{
    return( 
        <Toast onClose={() => {props.setShow(false)}} show={props.show} delay={3000} autohide>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    )
}