import React from "react"

interface ICard {
    children : React.ReactNode;
}

export const Card = ({children}: ICard) =>{
    return (
        <div className="shadow p-3 rounded-4 mb-3" style={{backgroundColor: 'white'}}>
            {children}
        </div>
    )
}