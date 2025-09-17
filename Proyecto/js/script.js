function togglePassword() {
    var input = document.getElementById("contrasena");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}