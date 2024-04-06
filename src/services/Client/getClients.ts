import { api } from "../api";

export async function getClients() {
    try{
        const { data } = await api.get('/Subscribe');
        return data
    }catch(e){
        console.log(e)
    }
}