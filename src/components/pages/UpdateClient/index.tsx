import { useNavigate, useParams } from "react-router-dom"
import { ClientForm } from "../../template/ClientForm"
import { useEffect, useState } from "react";
import { IClient } from "../../../types/client";
import { getClientInfo } from "../../../services/Client/getClientInfo";
import { updateClient } from "../../../services/Client/updateClient";
import { isInfancyVerification } from "../../../utils/isInfancyVerification";
import { ModalConfirmAction } from "../../template/ModalConfirmAction";
import { ToastCoomponent } from "../../atoms/Toast";
import { Loading } from "../../atoms/Loading";

export const UpdateClient = () =>{
    const navigate = useNavigate();
    const { cpf } = useParams();

    const [show, setShow] = useState<boolean>(false);
    const [gettingInfo, setGettingInfo] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('');
    const [type, setType] = useState<'error' | 'success'>('error');
    const [clientInfo, setClientInfo] = useState<IClient>();
    const [loading, setLoading] = useState<boolean>(false);
    const [modalConfirm, setModalConfirm] = useState<boolean>(false);

    useEffect(()=>{
        const getClientInfos = async ()=>   {
            const retorno = await getClientInfo(cpf || '');
            setGettingInfo(false)
            if(retorno === 'CPF não encontrado'){
                setShow(true);
                setType('error')
                setMessage(retorno);
                setTimeout(()=>{navigate('/')}, 2000)
                return;
            }
                setClientInfo(retorno as IClient);
        }
        getClientInfos();
    },[cpf, navigate])

    async function handleSubmit(values: IClient){
        setLoading(true);
        if(!isInfancyVerification(values.birthDate)){
            values.responsible = null
        }
        const response = await updateClient({
            CPF: cpf || '', 
            body: values
        });
        setLoading(false);

        if(response.mensagem !== 'Sucesso'){
            setMessage(response.mensagem)
            setShow(true)
            return ;
        }
        setType('success')
        setMessage('Atualizado com sucesso');
        setTimeout(()=>{navigate('/')}, 2000);
        return response;
    }

    return (
        <div>
            {gettingInfo && 
                <Loading/>
            }
            {clientInfo && 
                <ClientForm 
                    values={clientInfo}
                    handleSubmit={(value) => {
                        setClientInfo(value);
                        setModalConfirm(true)
                    }}
                    loading={loading}
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
                loading={loading}
                confirmButtonLabel="Atualizar"
                modalTitle="Atualizar os dados"
            />}
            <ToastCoomponent 
                show={show}
                setShow={(value)=> {setShow(value)}}
                message={message}
                type={type}
            />
        </div>
    )
}