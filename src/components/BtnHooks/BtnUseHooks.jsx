import React,{useState,useEffect } from 'react';

export default function BtnUseHook() {
const [edad, setEdad] = useState(0);

const CambiarValor = () => {
    console.log(edad) 
    setEdad(edad + 1);
}

    return (
        <div>
            <button onClick={() =>CambiarValor()}>Incrementar {edad}</button>
        </div>
    )

}