import './styles.css'

interface IIcon {
    iconName: string;
    onClick?: () => void;
}

export const Icon = ( { ...props }: IIcon) =>{
    return(
        <i 
            className={props.iconName} 
            onClick={props.onClick}    
        />
    )
}