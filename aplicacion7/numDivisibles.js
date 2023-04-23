function Divisible() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var contar = 0;

    if (numero1 % 1 != 0) {
        result.innerHTML = "El numero " + numero1 + " debe ser entero";
        contar = 1;
    }
    if (numero2 % 1 != 0) {
        result2.innerHTML = "El numero " + numero2 + " debe ser entero";
        contar = 1;
    }
    if (numero1 < 0) {
        result.innerHTML = "El numero " + numero1 + " debe ser positivo";
        contar = 1;
    }
    if (numero2 < 0) {
        result2.innerHTML = "El numero " + numero2 + " debe ser positivo";
        contar = 1;
    }
    if (numero1 < 0 && numero1 % 1 != 0) {
        result.innerHTML = "El numero " + numero1 + " debe ser entero positivo";
        contar = 1;
    }
    if (numero2 < 0 && numero2 % 1 != 0) {
        result2.innerHTML = "El numero " + numero2 + " debe ser entero positivo";
        contar = 1;
    }
    if (contar != 1) {
        if (numero1 % numero2 == 0) {
            result.innerHTML = "El numero " + numero1 + " es divisible entre el numero " + numero2;
            result2.innerHTML = "";
        } else {
            result.innerHTML = "El numero " + numero1 + " no es divisible entre el numero " + numero2;
            result2.innerHTML = "";
        }
    }

}