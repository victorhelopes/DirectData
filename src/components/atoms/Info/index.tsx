interface IInfo {
    value: string;
}

export const Info = ({ ...props }: IInfo)=>{
    return(
        <td>{props.value}</td>
    )
}