import { useNavigate, useParams } from "react-router-dom"
import { ClientForm } from "../../template/ClientForm"
import { useEffect, useState } from "react";
import { IClient } from "../../../types/client";
import { getClientInfo } from "../../../services/Client/getClientInfo";
import { updateClient } from "../../../services/Client/updateClient";
import { isInfancyVerification } from "../../../utils/isInfancyVerification";
import { ModalConfirmAction } from "../../template/ModalConfirmAction";

export const UpdateClient = () =>{
    const navigate = useNavigate();
    const { cpf } = useParams();

    const [clientInfo, setClientInfo] = useState<IClient>();
    const [modalConfirm, setModalConfirm] = useState<boolean>(false);

    useEffect(()=>{
        const getClientInfos = async ()=>   {
            const retorno = await getClientInfo(cpf || '');
            if(retorno){
                setClientInfo(retorno)
            }
        }
        getClientInfos();
    },[cpf])

    async function handleSubmit(values: IClient){
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
    }

    return (
        <div>
            {clientInfo && 
                <ClientForm 
                    values={clientInfo}
                    handleSubmit={(value) => {
                        setClientInfo(value);
                        setModalConfirm(true)
                    }}
                    handleCancel={()=>{
                        navigate('/')
                    }}
                    titlePage="Atualizar cliente"
                />
            }

            {modalConfirm && 
                <ModalConfirmAction
                cancelAction={()=>{
                    setModalConfirm(false)
                }}
                cancelButtonLabel="Cancelar"
                confirmAction={()=>{
                    if(clientInfo)
                        handleSubmit(clientInfo)
                }}
                confirmButtonLabel="Atualizar"
                modalTitle="Atualizar os dados"
            />}
        </div>
    )
}