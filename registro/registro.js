// Función para validar el formulario
function validateForm() {
    // Obtiene el valor del campo de contraseña
    var password = document.getElementById("password").value;
    // Obtiene el valor del campo de confirmación de contraseña
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Comprueba si las contraseñas coinciden
    if (password !== confirmPassword) {
        // Muestra un mensaje de error si las contraseñas no coinciden
        document.getElementById("error-msg").innerText = "Las contraseñas no coinciden";
        return false; // Evita que el formulario se envíe
    } else {
        // Borra el mensaje de error si las contraseñas coinciden
        document.getElementById("error-msg").innerText = "";
        showSuccessMessage(); // Muestra un mensaje de éxito
        return false; // Evita que el formulario se envíe
    }
}

// Función para mostrar el mensaje de éxito
function showSuccessMessage() {
    // Hace visible el mensaje de éxito
    document.getElementById("success-msg").style.display = "block";
}