import React, { useState } from 'react';
import './AdministratorPage.css'; // Asegúrate de que la ruta sea correcta para tu archivo CSS
import { Link } from 'react-router-dom';

const AdministratorPage: React.FC = () => {
  // Estado para almacenar las solicitudes de soporte
  const [solicitudes, setSolicitudes] = useState<string[]>([]);

  // Función para simular la recepción de solicitudes (puedes adaptarla según tu lógica real)
  const recibirSolicitud = (solicitud: string) => {
    setSolicitudes([...solicitudes, solicitud]);
  };

  return (
    <div className="AdministratorPage">
      <header>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="admin-buttons">
          <button><Link to="/GenerarReportesPage">Generar Reporte</Link></button>
          <button><Link to="/AsignarPlazasPage">Asignar Plaza</Link></button>
          <button><Link to="/PlazasPage">Verificar Plazas</Link></button>
        </div>

        {/* Visualización de las solicitudes */}
        <div className="solicitudes-container">
          <h2>Solicitudes de Soporte</h2>
          {solicitudes.length > 0 ? (
            <ul>
              {solicitudes.map((solicitud, index) => (
                <li key={index}>{solicitud}</li>
              ))}
            </ul>
          ) : (
            <p>No hay solicitudes pendientes.</p>
          )}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AdministratorPage;
