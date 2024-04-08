import { ITableHeaderInfos } from "../../../utils/tableHeaderInfos";
import { Icon } from "../Icon/indes";

export interface ITableHeader {
    headers: ITableHeaderInfos[];
    orderBy: (value: string) => void;
    orderColumn: string;
    orderDirection: 'asc' | 'desc'
}

export const TableHeader= ( { ...props }: ITableHeader)=>{
    return(
        <thead>
            <tr>
                {
                    props.headers.map((header)=>{
                        return(
                            <th 
                                key={header.label}
                                style={{ 
                                    maxWidth:header.label === '' ? '10px': '', 
                                    minWidth: header.label === '' ? '10px': '160px',
                                    cursor: header.order ? 'pointer': ''
                                }}
                                onClick={()=>{
                                    if(header.order) props.orderBy(header.order)
                                }}
                            > 
                                {header.label}
                                {props.orderColumn===header.order && props.orderDirection === 'asc' && <Icon iconName="bi bi-chevron-up"/>}
                                {props.orderColumn===header.order && props.orderDirection === 'desc' && <Icon iconName="bi bi-chevron-down"/>}
                            </th>
                        )
                    })
                }
            </tr>

        </thead>
        
    )
}