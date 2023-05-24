import React, {useState} from 'react';

const Titulo = ({nuevoTitulo}) => {

    const [msj, setMsj]=useState("(from changed state)");
    const [mostrarMsj, setMostrarMsj]=useState(false)

    const mostrarMensaje = () =>{
        setMostrarMsj(true);
    }

    return (
        <div>
            <h1>{nuevoTitulo} {mostrarMsj && msj}</h1>
            <button onClick={mostrarMensaje}>Click me</button>
        </div>
    );
};

export default Titulo;