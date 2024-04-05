import { ClientForm } from "../../template/ClientForm";

import { IClient, IInfacy } from "../../../types/client";
import { createClient } from "../../../services/Client/createClient";
import { useState } from "react";
import { ToastCoomponent } from "../../atoms/Toast";
import { isInfancyVerification } from "../../../utils/isInfancyVerification";

export const CreateClient = () => {
    const [show, setShow] = useState<boolean>(false);

    async function handleCreateClient(values: IClient | IInfacy){
        const body = values;
        if(!isInfancyVerification(body.birthDate)){
            (body as IInfacy).responsible = null
        }
        const response = await createClient(values);
        if(!response){
            setShow(true)
        }
        return response;
    }

    return(
        <div className="container">
            <ClientForm 
                titlePage="Cadastro de cliente" 
                handleSubmit={(value) => {handleCreateClient(value)}}
            />
            
            <ToastCoomponent 
                show={show}
                setShow={(value)=> {setShow(value)}}
                message="CPF já cadastrado!"
            />
        </div>
    )
}