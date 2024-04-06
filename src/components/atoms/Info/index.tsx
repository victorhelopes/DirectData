interface IInfo {
    label: string;
    value: string;
}

export const Info = ({ ...props }: IInfo)=>{
    return(
        <p>
            <b>{props.label}:</b> {props.value}
        </p>
    )
}