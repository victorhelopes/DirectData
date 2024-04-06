import './styles.css';

export interface ITitle {
    title: string
};


export const Title = ({ ...props }: ITitle)=>{
    return(
        <h1 className='fw-bold'>{props.title}</h1>
    )
}