// AsignarPlazaPage.tsx

import React, { useState } from 'react';
import './AsignarPlazaPage.css'; // Asegúrate de que la ruta sea correcta para tu archivo CSS
import { Link } from 'react-router-dom';

const AsignarPlazaPage: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [plaza, setPlaza] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Obtener usuarios almacenados localmente
    const storedUsers = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Buscar el usuario por matrícula
    const usuario = storedUsers.find((user: any) => user.matricula === matricula);

    if (usuario) {
      // Asignar plaza al usuario
      const updatedUsers = storedUsers.map((user: any) => {
        if (user.matricula === matricula) {
          user.plaza = plaza;
        }
        return user;
      });

      // Guardar usuarios actualizados en localStorage
      localStorage.setItem('usuarios', JSON.stringify(updatedUsers));

      // Actualizar estado dinámicamente en parkingSpots
      const parkingSpots = JSON.parse(localStorage.getItem('parkingSpots') || '{}');
      parkingSpots[plaza] = 'Ocupado';
      localStorage.setItem('parkingSpots', JSON.stringify(parkingSpots));

      setMessage(`Plaza ${plaza} asignada correctamente a ${usuario.correo}`);
    } else {
      setMessage(`No se encontró ningún usuario con la matrícula ${matricula}`);
    }

    // Limpiar campos después de enviar
    setMatricula('');
    setPlaza('');
  };

  return (
    <div className="AsignarPlazaPage">
      <header>
        <nav>
          <ul>
            <li><Link to="/AdministratorPage">Regresar</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="plaza-form">
          <h1>Asignar/Modificar Plaza</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="matricula">Matrícula:</label>
              <input
                type="text"
                id="matricula"
                name="matricula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="plaza">Plaza:</label>
              <input
                type="text"
                id="plaza"
                name="plaza"
                value={plaza}
                onChange={(e) => setPlaza(e.target.value)}
                required
              />
            </div>
            <button type="submit">Asignar Plaza</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Artiles Enriquez Marcos Javier. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AsignarPlazaPage;
