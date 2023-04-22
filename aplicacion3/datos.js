function procedimiento() {

    var nombre=document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

    for (let index = 0; index < 1; index++) {
        if (edad >= 18) {
            document.getElementById('area').value = nombre+" es mayor de edad";
            document.getElementById('nombre');
            document.getElementById('edad');

        } else {
            document.getElementById('area').value = nombre+" es menor de edad";
            document.getElementById('nombre');
            document.getElementById('edad');
        }

    }
}