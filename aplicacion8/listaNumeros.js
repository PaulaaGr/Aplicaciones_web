function paresImpares(){
    
    const numeros = document.getElementById("numeros").value;
    const numarray = numeros.split(",");
    
    const par = numarray.filter(numero => numero % 2 == 0);
    const impar = numarray.filter(numero => numero % 2 != 0);
    const noEntero = numarray.filter(numero => numero % 1 != 0)

    if (par.length!=0){
        result.innerHTML = "<font color=red>Los números pares son: </font>"+par.join(", "); 
    }else{
        result.innerHTML= "No hay números pares";
    }
    if (impar.length!=0 ){
        for(i=0;i<impar.length;i++){
            if (isNaN(impares[i])){
                impar[i]="";
            }else if (impar[i]%1!=0){
                impar[i]="";
            }
        }
        result2.innerHTML = "<font color=green>Los números impares son: </font>"+impar.join(", ");
    }else{
        result2.innerHTML = "No hay números impares"
    }
    if (noEntero.length!=0){
        result3.innerHTML= noEntero.join(", ")+" <font color=blue> No es entero </font>";
    }
    }