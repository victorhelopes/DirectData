import { useState } from "react"

import { Button } from "react-bootstrap"
import { CardForm } from "../../organisms/CardForm"
import { Form, Formik } from "formik"
import { Title } from "../../atoms/Title"
import { IClient } from "../../../types/client"

import { isInfancyVerification } from "../../../utils/isInfancyVerification"
import { clientSchema } from "../../../utils/clientSchema"
import { responsibleSchema } from "../../../utils/responsibleSchema"
import { object } from "yup"
import { Loading } from "../../atoms/Loading"

interface IClientForm {
    handleSubmit: (values: IClient)=> void;
    handleCancel: ()=> void;
    titlePage: string;
    loading: boolean;
    values?: IClient;
}

export const ClientForm = ({ ...props }: IClientForm) =>{
    const [isInfancy, setIsInfancy] = useState<boolean>(false);

    function createSchema(isInfancy: boolean){
        if(isInfancy){
            return clientSchema.concat(object({responsible: responsibleSchema}))
        }
        return clientSchema;
    }

    return(
        <div>
            <Title title={props.titlePage}/>
            <Formik
                initialValues={{
                    name: props.values?.name || '',
                    familyName: props.values?.familyName || '',
                    birthDate: props.values?.birthDate || '',
                    cpf: props.values?.cpf || '',
                    weight: props.values?.weight || '',
                    height: props.values?.height || '',
                    email: props.values?.email || '',
                    telephone: props.values?.telephone || '',
                    street: props.values?.street || '',
                    number: props.values?.number || '',
                    complement: props.values?.complement || '',
                    cep: props.values?.cep || '',
                    city: props.values?.city || '',
                    neighborhood: props.values?.neighborhood || '',
                    responsible:{
                        name: props.values?.responsible?.name || '',
                        familyName: props.values?.responsible?.familyName || '',
                        birthDate: props.values?.responsible?.birthDate || '',
                        cpf: props.values?.responsible?.cpf || ''
                    }
                }}

                validationSchema={createSchema(isInfancy)}
                onSubmit={props.handleSubmit}
            >
                {({values,errors}) =>{
                    const isInfancyVerificationResponse = isInfancyVerification(values.birthDate);
                    if(isInfancyVerificationResponse){
                        clientSchema.concat(object({responsible: responsibleSchema}))
                    }
                    setIsInfancy(isInfancyVerificationResponse)

                    return(
                    <Form>
                        <CardForm
                            title="Dados pessoais"
                            formInputs={[
                                {
                                    label:'Nome',
                                    placeholder:"Nome",
                                    name:"name",
                                    errorMessage:errors.name || '',
                                    value:values.name
                                },
                                {
                                    label:'Sobrenome',
                                    placeholder:"Sobrenome",
                                    name:"familyName",
                                    errorMessage:errors.familyName || '',
                                    value:values.familyName
                                },
                                {
                                    label:'CPF',
                                    placeholder:"CPF",
                                    name:"cpf",
                                    errorMessage:errors.cpf || '',
                                    value:values.cpf,
                                    mask: '999.999.999-99'
                                },
                                {
                                    label:'Data de Nascimento',
                                    placeholder:"Data de Nascimento",
                                    name:"birthDate",
                                    errorMessage:errors.birthDate || '',
                                    value:values.birthDate,
                                    type: 'date'
                                },
                                {
                                    label:'Peso',
                                    placeholder:"Peso",
                                    name:"weight",
                                    errorMessage:errors.weight || '',
                                    value:values.weight,
                                    type: 'number'
                                },
                                {
                                    label:'Altura',
                                    placeholder:"Altura",
                                    name:"height",
                                    errorMessage:errors.height || '',
                                    value:values.height,
                                    type: 'number'
                                },
                            ]}
                        />

                        <CardForm
                            title="Dados para contato"
                            formInputs={[
                                {
                                    label:'Telefone de contato',
                                    placeholder:"Telefone de contato",
                                    name:"telephone",
                                    errorMessage:errors.telephone || '',
                                    value:values.telephone,
                                    mask: '(99) 9 9999-9999'
                                },
                                {
                                    label:'Email',
                                    placeholder:"Email",
                                    name:"email",
                                    errorMessage:errors.email || '',
                                    value:values.email
                                },
                            ]}
                        />

                        <CardForm
                            title="Endereço"
                            formInputs={[
                                {
                                    label:'CEP',
                                    placeholder:"CEP",
                                    name:"cep",
                                    errorMessage:errors.cep || '',
                                    value:values.cep,
                                    mask: '99999-999'
                                },
                                {
                                    label:'Cidade',
                                    placeholder:"Cidade",
                                    name:"city",
                                    errorMessage:errors.city || '',
                                    value:values.city
                                },
                                {
                                    label:'Bairro',
                                    placeholder:"Bairro",
                                    name:"neighborhood",
                                    errorMessage:errors.neighborhood || '',
                                    value:values.neighborhood
                                },
                                {
                                    label:'Logradouro',
                                    placeholder:"Logradouro",
                                    name:"street",
                                    errorMessage:errors.street || '',
                                    value:values.street
                                },
                                {
                                    label:'Número',
                                    placeholder:"Número",
                                    name:"number",
                                    errorMessage:errors.number || '',
                                    value:values.number
                                },
                                {
                                    label:'Complemento',
                                    placeholder:"Complemento",
                                    name:"complement",
                                    errorMessage:errors.complement || '',
                                    value:values.complement || '',
                                },
                            ]}
                        />

                        {isInfancy && 
                            <CardForm
                                title="Dados Responsável"
                                formInputs={[
                                    {
                                        label:'Nome',
                                        placeholder:"Nome",
                                        name:"responsible.name",
                                        errorMessage:errors.responsible?.name || '',
                                        value:values.responsible?.name || ''
                                    },
                                    {
                                        label:'Sobrenome',
                                        placeholder:"Sobrenome",
                                        name:"responsible.familyName",
                                        errorMessage:errors.responsible?.familyName || '',
                                        value:values.responsible?.familyName || ''
                                    },
                                    {
                                        label:'CPF',
                                        placeholder:"CPF",
                                        name:"responsible.cpf",
                                        errorMessage:errors.responsible?.cpf || '',
                                        value:values.responsible?.cpf || '',
                                        mask: '999.999.999-99'
                                    },
                                    {
                                        label:'Data de Nascimento',
                                        placeholder:"Data de Nascimento",
                                        name:"responsible.birthDate",
                                        errorMessage:errors.responsible?.birthDate || '',
                                        value:values.responsible?.birthDate || '',
                                        type: 'date'
                                    },
                                ]}
                            />
                        }

                        <div className="d-flex justify-content-end">
                            <Button 
                                className="me-3"
                                variant="outline-danger"
                                onClick={props.handleCancel}
                            >
                                {props.loading?
                                    <Loading/>    
                                :
                                    'Cancelar'
                                }
                            </Button>
                            <Button 
                                variant="success" 
                                type="submit"
                            >
                                {props.loading?
                                    <Loading/>    
                                :
                                    'Enviar'
                                }
                            </Button>
                        </div>
                    </Form>
                )}}
            </Formik>
        </div>
    )
}