function numero(){
    var numero = document.getElementById("numero").value;
    var respuesta = document.getElementById("respuesta");
    
    if (numero%2===0){
        respuesta.innerHTML= "El numero es par";
    }else if(numero%1!=0){
        respuesta.innerHTML= "Debe ingresar un numero entero";
    }else{
        respuesta.innerHTML= "El numero es impar";
    }
    if (numero<0){
        respuesta.innerHTML= "El numero debe ser positivo";
    }
    if (numero<0 && numero%1!=0){
        respuesta.innerHTML= "Debe ingresar numeros enteros positivos";
    }
    }