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
    responsible: IPerson | null;
    complement?: string;
}
