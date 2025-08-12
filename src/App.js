import './App.css';
import { useState, useEffect, use } from 'react';
import Transcripcion from './components/Transcripciones/Transcripcion';


function App() {
  const [url, setUrl] = useState('');
  const [transcription, setTranscription] = useState('Aqui aparecera la transcripcion');
  const [loading, setLoading] = useState(false);
  const [fallo, setFallo] = useState(false);
  const [laPrimera, setLaPrimera] = useState(true);
  const [urlsYResultados, setUrlsYResultados] = useState([]);

  useEffect(() => {
    if (urlsYResultados.length === 0) {
      setTranscription("Aqui aparecera la transcripcion");
    }
  }, [urlsYResultados]);


  const eliminarTranscripcion = (index) => {
    console.log("eliminando transcripción en el índice:", index);
    setUrlsYResultados(prev => prev.filter((_, i) => i !== index));
  };

  
    const handleDownload = async () => {
    setLoading(true);
    setLaPrimera(false);
    try {
      const response = await fetch(`https://200.85.177.8:4000/download?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      const resultado = data.texto || "No se pudo obtener el texto";
      setTranscription(resultado);
      setLoading(false);
      // Guardar en el historial
      setUrlsYResultados(prev => [...prev, { url, resultado }]);

    } catch (error) {
      console.error('Error fetching download URL:', error);
      setLoading(false);
      setFallo(true);
    }
  };

  return (
    <div className='app'>
      <h1 className='titulo'>Generador de ideas</h1>
      <input  type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={handleDownload}>Generar idea</button>
        <h2>Transcripciones</h2>
      <div className='transcriptiones'>
          {/* Transcripciones existentes */}
          {urlsYResultados.map((urlYResultado, index) => (
            <Transcripcion
              key={index} 
              index={index}
              urlYResultado={urlYResultado} 
              eliminar={eliminarTranscripcion} 
            />
          ))}
          
          {/* Estado de carga o error para la nueva transcripción */}
          {loading && (
            <div>
              <p>Cargando nueva transcripción...</p>
            </div>
          )}
          {fallo && (
            <div>
              <p>
                Error al cargar la transcripción. (¿La URL es correcta?)<br/>
              </p>
            </div>
          )}
          {laPrimera && <p>{transcription}</p>}
      </div>
      <footer>
        <p>Generador de ideas - 2025</p>
        <a href='https://200.85.177.8:4000/' target='_blank' rel='noopener noreferrer'>Terminal</a>
      </footer>
    </div>
  );
}

export default App;
