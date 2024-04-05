import Form from 'react-bootstrap/Form';

import './styles.css'

export interface ILabel{
    label: string;
}

export const Label = ({label}: ILabel) => {
    return(<Form.Label className='fw-semibold'>{label}</Form.Label>)
}