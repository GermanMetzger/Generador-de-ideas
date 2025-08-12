import React from 'react'


import "./Transcripcion.css"


export default function Transcripcion({ urlYResultado, eliminar, index }) {
  return (
    <div className='transcription'>
      <div>
        <h3>URL: {urlYResultado.url}</h3>
        <p>Transcripción: {urlYResultado.resultado}</p>
        <button onClick={() => eliminar(index)}>Eliminar</button>
      </div>
    </div>
  )
}
