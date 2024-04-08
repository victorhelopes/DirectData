import { useNavigate, useParams } from "react-router-dom"
import { ClientForm } from "../../template/ClientForm"
import { useEffect, useState } from "react";
import { IClient } from "../../../types/client";
import { getClientInfo } from "../../../services/Client/getClientInfo";
import { updateClient } from "../../../services/Client/updateClient";
import { isInfancyVerification } from "../../../utils/isInfancyVerification";

export const UpdateClient = () =>{
    const navigate = useNavigate();
    const { cpf } = useParams();

    const [clientInfo, setClientInfo] = useState<IClient>();

    useEffect(()=>{
        const getClientInfos = async ()=>   {
            const retorno = await getClientInfo(cpf || '');
            if(retorno){
                setClientInfo(retorno)
            }
        }
        getClientInfos();
    },[cpf])

    return (
        <div>
            {clientInfo && <ClientForm 
                values={clientInfo}
                handleSubmit={async(values: IClient)=>{
                    if(!isInfancyVerification(values.birthDate)){
                        values.responsible = null
                    }
                    const { mensagem } = await updateClient({
                        CPF: cpf || '', 
                        body: values
                    });

                    if(mensagem === "Sucesso"){
                        navigate('/')
                    }
                }}
                handleCancel={()=>{
                    navigate('/')
                }}
                titlePage="Atualizar cliente"
            />}
        </div>
    )
}