function Mostrar()
{
    var contadorDiv = 0;
    var numero = prompt('Ingrese un numero');
    numero = parseInt(numero);

    for(anterior = 2; anterior < numero ; anterior++){
        if(numero%anterior==0){
            document.write('<br>' + anterior);
            contadorDiv++;
        }
        if(anterior > (numero/2)){
            break;
        }
    }

    if(contadorDiv == 0){
        document.write('<br>' + 'Es primo');
    }
    else{
        document.write('<br>' + 'No es primo');
    }

}//FIN DE LA FUNCIÓN
