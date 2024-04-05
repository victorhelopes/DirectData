import './styles.css';

export interface ITitle {
    title: string
};

export const SectionTitle = ({ ...props }: ITitle)=>{
    return(
        <h4>{props.title}</h4>
    )
}