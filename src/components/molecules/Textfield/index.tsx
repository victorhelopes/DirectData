import { FormGroup } from "react-bootstrap"

import { Error, IError } from "../../atoms/Error"
import { ILabel, Label } from "../../atoms/Label"
import { IInput, Input } from "../../atoms/Input"

export interface ITextfield  extends ILabel, IInput, IError {};

export const Textfield = ( { ...props }: ITextfield )=>{
    return(
        <FormGroup className="d-flex flex-column flex-fill">
            <Label label={props.label}/>
            <Input 
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                key={props.name}
                mask={props.mask}
                type={props.type}
            />
            <Error errorMessage={props.errorMessage}/>
        </FormGroup>
    )
}