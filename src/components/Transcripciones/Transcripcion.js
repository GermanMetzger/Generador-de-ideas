import React from 'react'


import "./Transcripcion.css"

const copiarAlPortapapeles = (texto) => {
  navigator.clipboard.writeText(texto)
  //puto el que lee
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
        <button style={{ backgroundColor: 'blue', color: 'white', margin: '15px' }} onClick={() => {copiarAlPortapapeles(urlYResultado.resultado); eliminar(index);}}>Copiar y Eliminar</button>
        <button style={{ backgroundColor: 'red', color: 'white', margin: '15px' }} onClick={() => eliminar(index)}>Eliminar</button>
        <a style={{ backgroundColor: 'green', color: 'white', margin: '15px' }} onClick={() => eliminar(index)} href={`https://chat.openai.com/?q=Analicemos esto: ${urlYResultado.resultado}`} target="_blank">Pegar a ChatGPT</a>
      </div>
    </div>
  )
}
