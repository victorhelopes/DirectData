import { useNavigate } from "react-router-dom";
import { IClient } from "../../../types/client"
import { Icon } from "../../atoms/Icon/indes";
import { Info } from "../../atoms/Info";

interface IClientInfos {
    clientInfos: IClient;
}

export const ClientInfos = ({ ...props }: IClientInfos)=>{
    const navigate = useNavigate();

    return(
        <tr>
            <Info value={props.clientInfos.name}/>
            <Info value={props.clientInfos.familyName}/>
            <Info value={props.clientInfos.birthDate}/>
            <Info value={props.clientInfos.telephone}/>
            <Info value={props.clientInfos.email}/>
            <td>
                <Icon 
                    iconName="bi bi-pencil" 
                    onClick={()=>{ 
                        navigate(`/edit-client/cpf=${props.clientInfos.cpf}`)
                    }}
                />
            </td>
        </tr>
    )
}