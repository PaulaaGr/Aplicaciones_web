function validarTipo(){

    var tipo=document.getElementById('tipo').value;

    if ( typeof Number(tipo)){

        document.getElementById ('area').value="Numero";
        document.getElementById ('tipo');


    } else if(typeof String(tipo)){ 

        document.getElementById('area').value="Texto";
        document.getElementById('tipo');
        document.getElementById('tipo');
    }
}