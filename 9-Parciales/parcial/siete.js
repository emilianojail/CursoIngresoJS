function Mostrar()
{
    var nota = 0;
    var sexo;
    var acumuladorDeNotas = 0;
    var notaMasBaja;
    var cantidadDeVaronesAprobados = 0;

    for (var contador = 0; contador < 3; contador++) {

        nota = prompt('Ingrese una nota');        
        while(nota > 10 || nota < 0 || isNaN(nota)){
            nota = prompt('Error, ingrese una nota valida');
            nota = parseInt(nota);
        }
        nota = parseInt(nota);

        sexo = prompt('Ingrese el sexo');        
        while(sexo != 'f' && sexo != 'm'){
            sexo = prompt('Error, ingrese sexo valido');
        }

        if (contador == 0) {
            notaMasBaja = nota;            
        }        
        acumuladorDeNotas += nota;
        if(nota < notaMasBaja){
            notaMasBaja = nota;
        }
        if(nota >= 6 && sexo == 'm'){
            cantidadDeVaronesAprobados++;
        }        

    }

    alert('Promedio de notas: ' + acumuladorDeNotas / 3)
    alert('La nota mas baja es: ' + notaMasBaja)
    alert('Cantidad de varones aprobados: ' + cantidadDeVaronesAprobados );
}
