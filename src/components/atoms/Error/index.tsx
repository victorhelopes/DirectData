import './styles.css'

export interface IError {
    errorMessage: string;
}

export const Error = ( { ...props }: IError)=> {
    return <p className="mb-0 error">{props.errorMessage}</p>
}