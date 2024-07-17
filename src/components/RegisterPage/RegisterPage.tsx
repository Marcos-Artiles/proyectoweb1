// RegisterPage.tsx

import React from 'react';
import './RegisterPage.css'; // Importa el archivo de estilos CSS local

const RegisterPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    if (validateForm()) {
      saveDataLocally();
    }
  };

  const validateForm = () => {
    const colorCarro = (document.getElementById('colorCarro') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
    const matricula = (document.getElementById('matricula') as HTMLInputElement).value;
    const lettersOnly = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!lettersOnly.test(colorCarro)) {
      alert("El campo Color del Carro solo puede contener letras.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
    }
    if (isMatriculaDuplicated(matricula)) {
      alert("La matrícula ya está registrada. Por favor, ingrese una matrícula diferente.");
      return false;
    }
    
    return true;
  };

  const isMatriculaDuplicated = (matricula: string) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.some((user: { matricula: string }) => user.matricula === matricula);
  };

  const saveDataLocally = () => {
    const correo = (document.getElementById('correo') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const matricula = (document.getElementById('matricula') as HTMLInputElement).value;
    const colorCarro = (document.getElementById('colorCarro') as HTMLInputElement).value;

    const usuario = {
      correo: correo,
      password: password,
      matricula: matricula,
      colorCarro: colorCarro
    };

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(usuario);

    const usuariosJSON = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosJSON);

    (document.getElementById('success-msg') as HTMLElement).style.display = 'block';
    (document.getElementById('registrationForm') as HTMLFormElement).reset();
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
          </ul>
        </nav>
      </header>

      <h2>Registro de Usuario</h2>

      <form id="registrationForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input type="text" id="correo" name="correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input type="text" id="matricula" name="matricula" required />
        </div>
        <div className="form-group">
          <label htmlFor="colorCarro">Color del Carro:</label>
          <input type="text" id="colorCarro" name="colorCarro" required />
        </div>
        <button type="submit">Registrarse</button>
        <p id="success-msg" style={{ display: 'none', color: 'green', fontWeight: 'bold' }}>
          Registro exitoso. ¡Bienvenido!
        </p>
      </form>

      <footer>
        <p>© 2024 Marcos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default RegisterPage;