import React from "react"

const mifuncion = () => { 
    console.log("Hola desde la consola")
}

export default function HolaMundo(props) {
    return (
        <div>
            <header>
                <h1>Hola mundo, soy {props.Info.Name} de {props.Info.Age} años</h1>
            </header>
        </div>
    )
}


export function AdiosMundo() {
    return (
        <div>
            <header>
                <h1>Adios mundo</h1>
            </header>
        </div>
    )
}
 