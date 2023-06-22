import React from "react";
import '../hojas-de-estilo/Formulario.css'
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function Formulario (props) {

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);

  };

  const manejarEnvio = e => {
    e.preventDefault();
    

    const tareaNueva = {
      id: uuidv4(), //creando un id unico usando el paquete uuid instalar mediante npm install uuid
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
    
    // Limpiar el input después de agregar una tarea
    setInput("");
  };

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='text'
        value={input} // Agregar el atributo 'value' para mostrar el valor actual del input
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  );
}

export default Formulario;