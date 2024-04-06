import { IClient } from "../../../types/client"
import { Icon } from "../../atoms/Icon/indes";
import { Info } from "../../atoms/Info";

interface IClientInfos {
    clientInfos: IClient;
}

export const ClientInfos = ({ ...props }: IClientInfos)=>{
    return(
        <div className="d-flex justify-content-between" key={props.clientInfos.cpf}>
            <Icon iconName="bi bi-list"/>
            <Info label="Nome" value={props.clientInfos.name}/>
            <Info label="Sobrenome" value={props.clientInfos.familyName}/>
            <Info label="Data de nascimento" value={props.clientInfos.birthDate}/>
            <Info label="Telefone" value={props.clientInfos.telephone}/>
            <Info label="Email" value={props.clientInfos.email}/>
            <div>
                <Icon iconName="bi bi-pencil me-3"/>
                <Icon iconName="bi bi-trash"/>
            </div>
        </div>
    )
}