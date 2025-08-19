import React from "react";
import chatgpt from "../../assets/openai.svg"

import "./Transcripcion.css";

export default function Transcripcion({ urlYResultado, eliminar, index, noche }) {

  const copiarAlPortapapeles = (texto) => {
    navigator.clipboard
      .writeText(texto)
      //puto el que lee
      .catch((error) => {
        console.error("Error al copiar al portapapeles:", error);
      });
  };

  return (
    <div
      className={`transcriptionTarjeta${noche ? ' noche' : ''}`}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>
          {urlYResultado.url ? "URL:" + urlYResultado.url : "Video descargado"}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
          }}
        >
          <button
            style={{ backgroundColor: "blue", margin: "15px" }}
            onClick={() => {
              copiarAlPortapapeles(urlYResultado.resultado);
            }}
          >
            Copiar
          </button>
          <button
            style={{ backgroundColor: "red", margin: "15px" }}
            onClick={() => eliminar(index)}
          >
            Eliminar
          </button>
          <a
            style={{ backgroundColor: "green", margin: "15px" }}
            onClick={() => {
            }}
            href={`https://chat.openai.com/?q=Analicemos esto: ${urlYResultado.resultado}`}
            target="_blank"
          >
            <img src={chatgpt} style={{ width: "24px", height: "24px" }} alt="ChatGPT" />
          </a>
        </div>
        <p>{urlYResultado.resultado}</p>
      </div>
    </div>
  );
}
