function validarTipo(){

    var tipo=document.getElementById('tipo').value;
    var text = isNaN(tipo)

    if ( tipo != ''){
        if (text==true){

        document.getElementById ('area').value="Texto";
        document.getElementById ('tipo');

        } else if(text == false){ 

        document.getElementById('area').value="Numero";
        document.getElementById('tipo');
        document.getElementById('tipo');
        }
    }
}