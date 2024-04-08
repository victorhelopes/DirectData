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
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [type, setType] = useState<'error' | 'success'>('error');

    async function handleCreateClient(values: IClient ){
        setLoading(true);
        const body = values;
        if(!isInfancyVerification(body.birthDate)){
            body.responsible = null
        }
        const response = await createClient(values);
        setLoading(false);
        if(response.mensagem !== 'Sucesso'){
            setMessage(response.mensagem)
            setShow(true);
            setType('error')
            return ;
        }
        setType('success')
        setMessage('Cadastrado com sucesso');
        setShow(true);
        setTimeout(()=>{navigate('/')}, 2000);
        return response;
    }

    return(
        <>
            <ClientForm 
                titlePage="Cadastro de cliente" 
                handleSubmit={(value) => {handleCreateClient(value)}}
                handleCancel={()=>{navigate('/')}}
                loading={loading}
            />
            
            <ToastCoomponent 
                show={show}
                setShow={(value)=> {setShow(value)}}
                message={message}
                type={type}
            />
        </>
    )
}