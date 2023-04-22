function notas() {

    var nombre=document.getElementById('nombre').value;
    var materia = document.getElementById('materia').value;
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;

    var sumaNotas = (parseFloat(nota1) +parseFloat (nota2) +parseFloat (nota3));
    var promedio= sumaNotas/3;

    if (promedio<30){
        var noPasa = (" su nota es "+promedio);

    }else{
        var pasa = " su nota es "+promedio;
    }

    if (promedio<30){
        document.getElementById('area').value = "Lo siento "+nombre+ noPasa + " ,no pasó la materia de: "+materia;
        document.getElementById('nombre');
        document.getElementById('materia');
        document.getElementById('noPasa').style.font="red";
        document.getElementById('pasa').style.font="green";
    }else{
        document.getElementById('area').value = "Felicidades "+nombre+ pasa + " ,pasó la materia de: "+materia;
        document.getElementById('nombre');
        document.getElementById('materia');
        document.getElementById('pasa').style.font="green";
        document.getElementById('noPasa').style.font="red";
    }
}