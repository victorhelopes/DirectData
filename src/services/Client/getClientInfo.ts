import { IClient } from "../../types/client";
import { api } from "../api";

export const getClientInfo= async (CPF: string): Promise<IClient | string> =>{ 
    try{
        const { data } = await api.get(`/Subscribe/${CPF}`);
        return data.retorno as IClient;
    }catch(e: any){
        return e.response.data.mensagem
    }
}