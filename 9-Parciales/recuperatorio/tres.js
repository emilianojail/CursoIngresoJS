function Mostrar()
{
    var precio1;
    var precio2;
    var precio3;
    var resultadoDeSuma;
    var resultadoDePromedio;

    precio1 = document.getElementById('precioUno').value;
    precio2 = document.getElementById('precioDos').value;
    precio3 = document.getElementById('precioTres').value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultadoDeSuma = precio1 + precio2 + precio3;
    resultadoDePromedio = resultadoDeSuma / 3;

    alert('El resultado de la suma es ' + resultadoDeSuma + ' y el promedio es ' + resultadoDePromedio);    
}
