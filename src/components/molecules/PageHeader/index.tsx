import { Button } from "react-bootstrap"
import { Title } from "../../atoms/Title"
import { useNavigate } from "react-router-dom"

export interface IPageHeader {
    title: string;
    link: string
    buttonLabel: string;
}

export const PageHeader = ( { ...props }: IPageHeader) =>{
    const navigate = useNavigate();

    return(
        <div className="d-flex justify-content-between mb-3">
                <Title title={props.title}/>
                <Button 
                    variant="success" 
                    onClick={()=>{
                        navigate(props.link)
                    }}
                >
                    {props.buttonLabel}
                </Button>
            </div>
    )
}