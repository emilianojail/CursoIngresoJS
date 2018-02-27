function Mostrar()
{
    var largo;
    var ancho;    
    var metrosDeAlambrado;

    largo = document.getElementById('alrgo').value;    
    largo = parseInt(largo);

    ancho = document.getElementById('ancho').value;    
    ancho = parseInt(ancho);

    metrosDeAlambrado = (largo * 2) + (ancho * 2)

    alert('Cantidad de metros de alambrado necesarios: ' + metrosDeAlambrado * 3);
}
