import { cpf } from "cpf-cnpj-validator"
import { object, string } from "yup"

export const responsibleSchema = object({
    name: string().required('Campo obrigatório'),
    familyName: string().required('Campo obrigatório'),
    birthDate: string().required('Campo obrigatório'),
    cpf: string().test('cpfIsValide', 'CPF não é válido', (value) => {return value ? cpf.isValid(value): false}).required('Campo obrigatório'),
})