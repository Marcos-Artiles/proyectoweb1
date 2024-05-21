// perfil_usuario.js

function validarContraseñas() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    return true;
}