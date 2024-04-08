import { ClientForm } from "../../template/ClientForm";

import { IClient,  } from "../../../types/client";
import { createClient } from "../../../services/Client/createClient";
import { useState } from "react";
import { ToastCoomponent } from "../../atoms/Toast";
import { isInfancyVerification } from "../../../utils/isInfancyVerification";
import { useNavigate } from "react-router-dom";

export const CreateClient = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    async function handleCreateClient(values: IClient ){
        const body = values;
        if(!isInfancyVerification(body.birthDate)){
            body.responsible = null
        }
        const response = await createClient(values);
        console.log(response)
        if(response.mensagem !== 'Sucesso'){
            setMessage(response.mensagem)
            setShow(true)
            return ;
        }
        navigate('/')
        return response;
    }

    return(
        <>
            <ClientForm 
                titlePage="Cadastro de cliente" 
                handleSubmit={(value) => {handleCreateClient(value)}}
                handleCancel={()=>{navigate('/')}}
            />
            
            <ToastCoomponent 
                show={show}
                setShow={(value)=> {setShow(value)}}
                message={message}
            />
        </>
    )
}