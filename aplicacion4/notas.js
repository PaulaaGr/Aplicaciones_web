function notas() {

    var nombre=document.getElementById('nombre').value;
    var materia = document.getElementById('materia').value;
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var area = document.getElementById('area');

    var sumaNotas = (parseFloat(nota1) +parseFloat (nota2) +parseFloat (nota3));
    var promedio= sumaNotas/3;

    if (promedio<30){
        var noPasa = (" ,su nota es "+promedio);

    }else{
        var pasa = " ,su nota es "+promedio;
    }

    if (promedio<30){
        area.innerHTML = "Lo siento "+nombre+ "<font color= red>"+ noPasa +"</font>" +" ,no pasó la materia de: "+materia;
        document.getElementById('nopasa');
        document.getElementById('nombre');
        document.getElementById('materia');
        // document.getElementById('area').value.innerHTML = "Lo siento "+nombre+ "<font color= red>"+ noPasa +"</font>" +" no pasó la materia de: "+materia;
        // document.getElementById('nopasa');
        // document.getElementById('nombre');
        // document.getElementById('materia');
        
    }else{
        
        area.innerHTML = "Felicidades "+nombre+"<font color=green>"+pasa+"</font>"+ " ,pasó la materia de: "+materia;
        document.getElementById('pasa');
        document.getElementById('nombre');
        document.getElementById('materia');
        
    }
}