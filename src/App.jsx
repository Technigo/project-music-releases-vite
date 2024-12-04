import React from 'react';  // Importa React primero
import data from './data.json';  // Importa data.json solo una vez
import Album from './Album.jsx';  // Importa el componente Album
import './App.css';  // Importa el archivo de estilos CSS

// Componente App
const App = () => {
  return (
    <div className="app-container">
      <h1>Maria's Music Releases</h1>
      <div className="album-grid">
        {/* Mapea los álbumes del JSON y pasa los datos al componente Album */}
        {data.albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default App;  // Exporta el componente App por defecto








