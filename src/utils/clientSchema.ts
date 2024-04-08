import { cpf } from "cpf-cnpj-validator"
import { number, object, string } from "yup"

export const clientSchema = object({
    name: string().required('Campo obrigatório'),
    familyName: string().required('Campo obrigatório'),
    birthDate: string().required('Campo obrigatório'),
    cpf: string()
        .test(
            'cpfIsValide',
            'CPF não é válido', 
            (value) => {
                return value ? cpf.isValid(value): false
        }
    ).required('Campo obrigatório'),
    weight: number().required('Campo obrigatório'),
    height: number().required('Campo obrigatório'),
    email: string().email().required('Campo obrigatório'),
    telephone: string().length(16).required('Campo obrigatório')
        .test(
            '', 
            'Telefone está incompleto', 
            (value)=> {
                return value.replaceAll('_','').length === 16
            }
        ),
    street: string().required('Campo obrigatório'),
    number: number().required('Campo obrigatório').positive().integer(),
    complement: string(),
    cep: string().required('Campo obrigatório'),
    city: string().required('Campo obrigatório'),
    neighborhood: string().required('Campo obrigatório'),
})