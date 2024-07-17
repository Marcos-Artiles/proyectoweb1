// SoportePage.tsx

import React, { useState } from 'react';
import './SoportePage.css'; // Asegúrate de importar tu archivo CSS local

const SoportePage: React.FC = () => {
  const [solicitud, setSolicitud] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí podrías guardar la solicitud en localStorage o enviarla a un servidor, dependiendo de tu implementación
    console.log('Solicitud enviada:', solicitud);
    setSolicitud('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSolicitud(event.target.value);
  };

  return (
    <div className="SoportePage">
      <header>
        <nav>
          <ul>
            <li><a href="/AdministratorPage">Regresar</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Formulario de Solicitud de Soporte</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="solicitud">Escribe tu solicitud:</label>
            <textarea id="solicitud" name="solicitud" value={solicitud} onChange={handleChange} rows={4} required />
          </div>
          <button type="submit">Enviar Solicitud</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Artiles Enriquez Marcos Javier. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default SoportePage;