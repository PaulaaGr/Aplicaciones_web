function validar(){

    var texto=document.getElementById('texto').value;

    if (texto ==""){

        document.getElementById ('area').value="Campo no digitado";
        document.getElementById ('texto');

    } else if (!isNaN(texto)) {

        document.getElementById('area').value="No se pueden introducir números";
        document.getElementById('texto');
        document.getElementById('texto');

    }else {

        procesar(texto);
    }
}

function procesar(texto){

    document.getElementById('area').value='El texto:  '+texto+' contiene '+texto.length + ' caracteres';
    
}