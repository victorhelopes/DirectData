import './styles.css'

interface IIcon {
    iconName: string;
}

export const Icon = ( { ...props }: IIcon) =>{
    return(<i className={props.iconName} />)
}