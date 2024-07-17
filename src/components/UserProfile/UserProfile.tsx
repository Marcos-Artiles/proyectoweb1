import React, { useEffect, useState } from 'react';
import './UserProfile.css'; // Importa el archivo de estilos CSS local
import { Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const [correo, setCorreo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [matricula, setMatricula] = useState<string>('');
  const [colorCarro, setColorCarro] = useState<string>('');
  const [plazaAsignada, setPlazaAsignada] = useState<string>(''); // Estado para la plaza asignada
  const [userIndex, setUserIndex] = useState<number | null>(null);

  useEffect(() => {
    const currentUser: any = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser) {
      setCorreo(currentUser.correo);
      setPassword(currentUser.password);
      setConfirmPassword(currentUser.password);
      setMatricula(currentUser.matricula);
      setColorCarro(currentUser.colorCarro);

      const usuarios: any[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const index: number = usuarios.findIndex(user => user.correo === currentUser.correo);
      setUserIndex(index);

      // Obtener la plaza asignada del usuario actual
      setPlazaAsignada(currentUser.plaza || ''); // Asigna la plaza, si está definida
    } else {
      console.error("No se encontró currentUser en el localStorage");
    }
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    if (validateForm()) {
      updateUserData();
    }
  };

  // Validar el formulario antes de enviar
  const validateForm = (): boolean => {
    const lettersOnly: RegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!lettersOnly.test(colorCarro)) {
      alert("El campo Color del Carro solo puede contener letras.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
    }
    
    return true;
  };

  // Actualizar los datos del usuario en localStorage
  const updateUserData = () => {
    const usuarios: any[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if (userIndex !== null && userIndex !== -1) {
      usuarios[userIndex] = {
        correo: correo,
        password: password,
        matricula: matricula,
        colorCarro: colorCarro,
        plaza: plazaAsignada // Actualiza la plaza asignada
      };

      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      localStorage.setItem('currentUser', JSON.stringify(usuarios[userIndex]));

      alert("Datos actualizados con éxito.");
    } else {
      console.error("Error al encontrar el usuario en la lista de usuarios.");
    }
  };

  // Aquí defines plazasDisponibles como una lista de ejemplo
  const plazasDisponibles: string[] = ["A-1", "B-2", "C-8"];

  return (
    <div>
      <div className="perfil-container">
        <header>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
            </ul>
          </nav>
        </header>

        <h2>Perfil de Usuario</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="correo">Correo:</label>
            <input
              type="text"
              id="correo"
              name="correo"
              value={correo}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="colorCarro">Color del Carro:</label>
            <input
              type="text"
              id="colorCarro"
              name="colorCarro"
              value={colorCarro}
              onChange={(e) => setColorCarro(e.target.value)}
              required
            />
          </div>
          <button type="submit">Actualizar Datos</button>
        </form>
      </div>

      <div className="additional-info">
        <div>
          <h3>Plaza Asignada:</h3>
          <p>{plazaAsignada}</p> {/* Mostrar la plaza asignada */}
        </div>
        <div>
          <button><Link to="/SoportePage">Soporte</Link></button>
        </div>
      </div>

      {/* Nuevo div para mostrar las plazas disponibles */}
      <div className="plazas-disponibles">
        <h2>Plazas Disponibles</h2>
        <ul>
          {/* Aquí puedes mapear las plazas disponibles */}
          {plazasDisponibles.map((plaza, index) => (
            <li key={index}>{plaza}</li>
          ))}
        </ul>
      </div>

      <footer>
        <p>© 2024 Marcos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default UserProfile;
