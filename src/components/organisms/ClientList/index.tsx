import { useEffect, useState } from "react";

import { getClients } from "../../../services/Client/getClients";
import { ClientInfos } from "../../molecules/ClientInfos";
import { TableHeader } from "../../atoms/TableHeader";

import { IClient } from "../../../types/client";
import { SORTABLE_COLUMNS } from "../../../utils/sortableColumnsClientTable";
import { CLIENT_TABEL_HEADER } from "../../../utils/clientTableHeader";
import { DIRECT_ORDER } from "../../../utils/sortableDirectionTable";

export const ClientList = ()=>{
    const [clients, setClients] = useState<IClient[]>([]);

    const [orderBy, setOrderBy] = useState<SORTABLE_COLUMNS>('name');
    const [directionOrder, setDirection] = useState<DIRECT_ORDER>('asc');

    function orderInfo({column, direction}: {column: SORTABLE_COLUMNS, direction: DIRECT_ORDER}){
        const orderedInfos = clients.sort((clientInfo1, clientInfo2)=>{
            if(direction === 'asc')
                return clientInfo1[column] > clientInfo2[column] ? 1 : -1
            return clientInfo1[column] < clientInfo2[column] ? 1 : -1
        })
        setClients(orderedInfos)
    }

    useEffect(()=>{
        async function getClientsInfos(){
            const { retorno } = await getClients();
            if(retorno){
                setClients(retorno as IClient[]);
            }
        }
        getClientsInfos();
    },[]);

    return(
        <table style={{width: '100%'}}>
            <TableHeader
                headers={CLIENT_TABEL_HEADER}
                orderDirection={directionOrder}
                orderColumn={orderBy}
                orderBy={(value)=>{
                    let newDirectionOrder: DIRECT_ORDER = 'asc'
                    if(value === orderBy && directionOrder === newDirectionOrder){
                        newDirectionOrder = 'desc'
                    }else{
                        setOrderBy(value as SORTABLE_COLUMNS);
                    }
                    setDirection(newDirectionOrder)
                    orderInfo({column: value as SORTABLE_COLUMNS, direction: newDirectionOrder})
                }}
            />
            <tbody>
                {clients.map((element: IClient) => {
                    return (<ClientInfos key={element.cpf} clientInfos={element}/>)
                })}
            </tbody>
        </table>
    )
}