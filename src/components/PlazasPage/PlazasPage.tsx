// PlazasPage.tsx

import React, { useState, useEffect } from 'react';
import './PlazasPage.css'; // Asegúrate de importar tu archivo CSS local

const PlazasPage: React.FC = () => {
  const [parkingSpots, setParkingSpots] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const storedParkingSpots = JSON.parse(localStorage.getItem('parkingSpots') || '{}');
    setParkingSpots(storedParkingSpots);
  }, []);

  const updateParkingSpot = (spot: string, availability: string) => {
    const updatedSpots = { ...parkingSpots, [spot]: availability };
    localStorage.setItem('parkingSpots', JSON.stringify(updatedSpots));
    setParkingSpots(updatedSpots);
  };

  return (
    <div className="PlazasPage">
      <header>
        <nav>
          <ul>
            <li><a href="/AdministratorPage">Regresar</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="plazas-container">
          {Object.entries(parkingSpots).map(([spot, availability]) => (
            <div key={spot} className="plaza-item">
              <span>{spot}</span>
              <span>{availability}</span>
              <button onClick={() => updateParkingSpot(spot, availability === 'Disponible' ? 'Ocupado' : 'Disponible')}>
                Cambiar Estado
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Artiles Enriquez Marcos Javier. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PlazasPage;