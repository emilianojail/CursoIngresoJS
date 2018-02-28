function Mostrar()
{
    var ventaActual;    
    var mayorImportDeVenta;
    var menorImportDeVenta;

    for (var contador = 0; contador < 24; ) {        
        ventaActual = prompt('Ingrese el importe de una venta');
        while ( isNaN(ventaActual) || ventaActual <= 0) {           
            ventaActual = prompt(' error , Ingrese el importe de una venta');
        }

        if (contador == 0) {
            ventaActual = parseInt(ventaActual);        
            mayorImportDeVenta = ventaActual;
            menorImportDeVenta = ventaActual;
            contador++;    
        }
        else {
            if(ventaActual > mayorImportDeVenta){
                mayorImportDeVenta = ventaActual;
                contador++;    
            }
            else{
                if (ventaActual < menorImportDeVenta) {
                    menorImportDeVenta = ventaActual;
                    contador++;    
                }
            }
        }
    }    

    document.write('El menor importe de venta fue: '+ menorImportDeVenta + '<br/>' + 'El mayor importe de venta fue: ' + mayorImportDeVenta)
}
