function Mostrar()
{

    var diaDeLaSemana;

    diaDeLaSemana = prompt('Ingrese un dia');

    switch (diaDeLaSemana) {
        case 'Sabado':
        case 'Domingo':
            alert('es fin de semana ');
            break;    
        default:
            alert('a trabajar !!!');
            break;
    }
}
