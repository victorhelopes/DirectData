import { Field, FieldProps } from "formik";
import InputMask from 'react-input-mask';

export interface IInput{
    placeholder: string;
    name: string;
    value: string | number;
    mask?: string;
    type?: string;
}

export const Input = ( { ...props }: IInput)=>{
    return(
        <Field
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
        >
            {({ field }: FieldProps) => (
                <InputMask
                    mask={props.mask as string}
                    { ...field }
                    type={props.type || "text"} 
                    placeholder={props.placeholder}
                />
              )}
        </Field>
    )
}