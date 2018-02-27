function Mostrar()
{
    var importe;
    var importeFinal;
    importe = document.getElementById('importeFinal').value;    
    importe = parseInt(importe);
    importeFinal = importe + (importe * 21 / 100);
    alert('El importe final es: ' + importeFinal);
}
