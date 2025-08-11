import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [transcription, setTranscription] = useState('Aqui aparecera la transcripcion');



  const handleDownload = async () => {
    try {

      const response = await fetch(`http://localhost:4000/download?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      setTranscription(data.texto || "No se pudo obtener el texto");

    } catch (error) {
      console.error('Error fetching download URL:', error);
    }
  };

  return (
    <div className='app'>
      <h1 className='titulo'>Generador de ideas</h1>
      <input  type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={handleDownload}>Generar idea</button>
      <div className='transcription'>
        <h2>Transcripción</h2>
        <p>{transcription}</p>
      </div>
    </div>
  );
}

export default App;
