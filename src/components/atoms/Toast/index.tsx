import { Toast } from "react-bootstrap"

import './styles.css'

interface IToast{
    show: boolean;
    message: string;
    type: 'error' | 'success'
    setShow: (value: boolean)=> void;
}

export const ToastCoomponent = ( { ...props }: IToast)=>{
    return( 
        <Toast 
            onClose={() => {
                props.setShow(false)
            }} 
            show={props.show} 
            delay={3000} 
            autohide
            style={{
                backgroundColor: props.type === 'error'? 'var(--cancel-color)' : 'var(--confirm-color)', 
                color: 'white'
            }}
        >
            <Toast.Body><b>{props.message}</b></Toast.Body>
        </Toast>
    )
}