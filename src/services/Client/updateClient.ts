import { IClient } from "../../types/client";
import { api } from "../api";

interface IUpdateClient {
    body: IClient;
    CPF: string;
}

export const updateClient = async ( { ...props }: IUpdateClient) =>{ 
    try{
        const { data } = await api.patch(`/Subscribe/${props.CPF}`, props.body);
        return data
    }catch(e: any){
        return e.response.data
    }
}