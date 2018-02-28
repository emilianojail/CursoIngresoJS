function Mostrar()
{
    var nombreDeAnimal;
    var pesoDeAnimal;
    var temperaturaDeAnimal;

    var acumuladorDePesoDeAnimales = 0;
    var pesoDeAnimalMasPesado = 0;
    var pesoDeAnimalMenosPesado = 0;
    var nombreDeAnimalMasPesado;
    var nombreDeAnimalMenosPesado;

    var cantDeTemperaturasPares = 0;
    var cantDeTemperaturasImpares = 0;
    var temperaturaMaximaDeHabitat;
    var temperaturaMinimaDeHabitat;    
    var cantidadDeAnimalesDeClimaFrio = 0;    

    var respuestaDeUsuario = 'Si';    
    var cantidadDeIteraciones = 0;


    while(respuestaDeUsuario != 'No' || respuestaDeUsuario != 'no'){        

        nombreDeAnimal = prompt('Ingrese el nombre del animal');

        pesoDeAnimal = prompt('Ingrese el peso del animal');
        pesoDeAnimal = parseInt(pesoDeAnimal);
        while(isNaN(pesoDeAnimal) || pesoDeAnimal <= 0 ){
            pesoDeAnimal = prompt('Error, vuelva a ingresar el peso del animal');
            pesoDeAnimal = parseInt(pesoDeAnimal);
        }

        temperaturaDeAnimal = prompt('Ingrese la temperatura del animal');
        temperaturaDeAnimal = parseInt(temperaturaDeAnimal);
        while(isNaN(temperaturaDeAnimal) || (temperaturaDeAnimal < -44 || temperaturaDeAnimal > 40) ){
            temperaturaDeAnimal = prompt('Error, vuelva a ingresar la temperatura del animal');
            temperaturaDeAnimal = parseInt(temperaturaDeAnimal);
        }

        if(cantidadDeIteraciones == 0){
            pesoDeAnimalMasPesado = pesoDeAnimal;
            pesoDeAnimalMenosPesado = pesoDeAnimal;
            nombreDeAnimalMasPesado = nombreDeAnimal;
            nombreDeAnimalMenosPesado = nombreDeAnimal;
            temperaturaMaximaDeHabitat = temperaturaDeAnimal;
            temperaturaMinimaDeHabitat = temperaturaDeAnimal;            
        }
        
        acumuladorDePesoDeAnimales += pesoDeAnimal;

        //Pesos
        if(pesoDeAnimal > pesoDeAnimalMasPesado){
            pesoDeAnimalMasPesado = pesoDeAnimal;
            nombreDeAnimalMasPesado = nombreDeAnimal;
        }
        if(pesoDeAnimal < pesoDeAnimalMenosPesado){
            pesoDeAnimalMenosPesado = pesoDeAnimal;
            nombreDeAnimalMenosPesado = nombreDeAnimal;
        }

        //Cantidad de animales de clima frio
        if(temperaturaDeAnimal < 0){
            cantidadDeAnimalesDeClimaFrio++;
        }

        //Cantidad de temperaturas pares e impares



        //ARREGLAR, los 0 los toma como pares.
        if(temperaturaDeAnimal % 2 == 0 && temperaturaDeAnimal != 0){
            cantDeTemperaturasPares++;
        }
        else{
            cantDeTemperaturasImpares++;
        }

        //Temperaturas minimas y maximas
        if(temperaturaDeAnimal < temperaturaMinimaDeHabitat){
            temperaturaMinimaDeHabitat = temperaturaDeAnimal;
        }
        if(temperaturaDeAnimal > temperaturaMaximaDeHabitat){
            temperaturaMaximaDeHabitat = temperaturaDeAnimal;
        }
    
        cantidadDeIteraciones++;
        respuestaDeUsuario = prompt('Desea ingresar otro animal?');    
    }

    document.write('Cantidad de temperaturas pares: ' + cantDeTemperaturasPares + '<br>');
    document.write('Cantidad de temperaturas impares: ' + cantDeTemperaturasImpares + '<br>');
    document.write('Nombre del animal mas pesado: ' + nombreDeAnimalMasPesado + '<br>');
    document.write('Nombre del animal menos pesado: ' + nombreDeAnimalMenosPesado + '<br>');
    document.write('Cantidad de animales de clima frio: ' + cantidadDeAnimalesDeClimaFrio + '<br>');
    document.write('Promedio de peso de todos los animales: ' + acumuladorDePesoDeAnimales / cantidadDeIteraciones + '<br>');
    document.write('Temperatura maxima de habitat: ' + temperaturaMaximaDeHabitat + '<br>');
    document.write('Temperatura minima de habitat: ' + temperaturaMinimaDeHabitat + '<br>');    
}

/*
(hasta que el usuario quiera)
nombre de un animal
peso de un animal (mayor a 0)
temperatura del habitat en el que vive (puede estar entre -40 y +40)
al final se debe informar cantidad de temperaturas pares ingresadas,
cantidad de temperaturas impares, 
nombre del animal mas pesado, 
nombre del animal menos pesado,
cantidad de animales cuyo habitat tiene menos de 0 grados.
promedio de peso de todos los animales.
temperaturas maximas y minimas ingresadas.
*/