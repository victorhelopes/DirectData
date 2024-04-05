import { Col, Row } from "react-bootstrap";
import { Card } from "../../atoms/Card";
import { SectionTitle } from "../../atoms/SectionTitle";
import { ITitle } from "../../atoms/Title"
import { ITextfield, Textfield } from "../../molecules/Textfield"

interface ICardForm extends ITitle {
    formInputs: ITextfield[];
}

export const CardForm = ({ ...props }: ICardForm) =>{
    return(
        <Card>
            <SectionTitle title={props.title}/>
            <Row>
                {
                    props.formInputs.map((formInput)=>{
                        return (
                            <Col xs={12} md={6} key={formInput.name}>
                                <Textfield
                                    errorMessage={formInput.errorMessage} 
                                    label={formInput.label} 
                                    name={formInput.name} 
                                    placeholder={formInput.placeholder} 
                                    value={formInput.value} 
                                    mask={formInput.mask}
                                    type={formInput.type}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </Card>
    )
}