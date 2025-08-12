import React from 'react'


import "./Transcripcion.css"

const copiarAlPortapapeles = (texto) => {
  navigator.clipboard.writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar al portapapeles:", error);
    });
};


export default function Transcripcion({ urlYResultado, eliminar, index }) {
  return (
    <div className='transcription'>
      <div>
        <h3>URL: {urlYResultado.url}</h3>
        <p>Transcripción: {urlYResultado.resultado}</p>
        <button onClick={() => {copiarAlPortapapeles(urlYResultado.resultado); eliminar(index);}}>Copiar y Eliminar</button>
        <button style={{ backgroundColor: 'red', color: 'white', margin: '5px' }} onClick={() => eliminar(index)}>Eliminar</button>
      </div>
    </div>
  )
}
