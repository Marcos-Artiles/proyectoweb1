// HomePage.tsx

import React from 'react';
import './HomePage.css'; // Archivo de estilos CSS local
import ubicacionParqueoImg from '../../ubicacion_parqueo.png'; // Importa la imagen desde src
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="contenedor">
      <header>
        <div className="contenedor_nav">
          <nav>
            <ul>
              <li><Link to="/LoginPage">Iniciar Sesión</Link></li>
              <li><Link to="/RegisterPage">Registrarse</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h1>Bienvenido al Sistema de Gestión de Parqueos de la ULEAM</h1>
        <p>
          En esta página podrá administrar y agendar su parqueo en la ULEAM.
        </p>
        <img src={ubicacionParqueoImg} alt="Ubicación del parqueo" />
      </main>

      <footer>
        <p>© 2024 Artiles Enriquez Marcos Javier. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
