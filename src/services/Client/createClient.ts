import { IClient } from "../../types/client";
import { api } from "../api";

export async function createClient(clientData: IClient) {
    try{
        const {data} = await api.post('/Subscribe', clientData);
        return data;
    }catch(e){
        console.log(e)
    }
}