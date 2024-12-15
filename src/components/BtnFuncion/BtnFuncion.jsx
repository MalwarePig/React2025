import React from 'react';

export default function SaludarConsola(props){
    const {Info, MyFuncion} = props;
    const {Name = 'No hay nombre', Age = 0} = Info;
 

    return (
        <div>
            <button onClick={() =>MyFuncion(Name)}>Saludar</button>
        </div>
    )
}