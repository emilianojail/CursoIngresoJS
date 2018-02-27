function Mostrar()
{
    var ventaActual;    
    var mayorImportDeVenta;
    var menorImportDeVenta;

    for (var index = 0; index < 5; ) {        
        ventaActual = prompt('Ingrese una venta');
        if (! isNaN(ventaActual) && ventaActual > 0) {
            if (index == 0) {
                ventaActual = parseInt(ventaActual);        
                mayorImportDeVenta = ventaActual;
                menorImportDeVenta = ventaActual;
                index++;    
            }
            else {
                if(ventaActual > mayorImportDeVenta){
                    mayorImportDeVenta = ventaActual;
                    index++;    
                }
                else{
                    if (ventaActual < menorImportDeVenta) {
                        menorImportDeVenta = ventaActual;
                        index++;    
                    }
                }
            }
        }
    }

    document.write('El menor importe de venta fue: '+ menorImportDeVenta + '<br/>' + 'El mayor importe de venta fue: ' + mayorImportDeVenta)
}
