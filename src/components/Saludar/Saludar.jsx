import React from 'react';

export default function Saludar(props){
    return ( 
        <>
            <h2>Que tal {props.name} cuando cumpliste {props.edad} años?</h2>
        </>

    )

}