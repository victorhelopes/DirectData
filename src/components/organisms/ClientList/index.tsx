import { useEffect, useState } from "react";
import { IClient } from "../../../types/client";
import { getClients } from "../../../services/Client/getClients";
import { ClientInfos } from "../../molecules/ClientInfos";

export const ClientList = ()=>{
    const [clients, setClients] = useState<IClient[]>([]);

    useEffect(()=>{
        async function getClientsInfos(){
            const { retorno } = await getClients();
            if(retorno)
                setClients(retorno as IClient[]);
        }

        getClientsInfos();
    },[])

    return(
        <>
            {clients.map((element: IClient) => {
                return (<ClientInfos clientInfos={element}/>)
            })}
        </>
    )
}