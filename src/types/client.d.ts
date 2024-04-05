import { IPerson } from "./person";

export interface IClient extends IPerson {
    weight: string;
    height: string;
    email: string;
    telephone: string;
    street: string;
    number: string;
    cep: string;
    city: string;
    birthDate: string;
    neighborhood: string
    complement?: string;
}


export interface IInfacy extends IClient{
    responsible: IResponsible;
}
