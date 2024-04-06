import { Card } from "../../atoms/Card"
import { PageHeader } from "../../molecules/PageHeader"
import { ClientList } from "../../organisms/ClientList"

export const ClientListCardWithHeader = () =>{
    return (
        <>
            <PageHeader
                title="Clientes cadastrados"
                buttonLabel="Adicionar cliente"
                link="create-client"
            />
            <Card>
                <ClientList/>
            </Card>
        </>
    )
}
