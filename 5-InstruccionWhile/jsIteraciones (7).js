//Solucion 1
function Mostrar()
{	
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var userInput;
	userInput = prompt('Ingrese un numero (o ingrese "si" para obtener el resultado)');
	acumulador +=  parseInt(userInput);		
	while(userInput != respuesta){		
		userInput = prompt('Ingrese un numero (o ingrese "si" para obtener el resultado)');			
		if(userInput != respuesta){
			contador++;					
			acumulador +=  parseInt(userInput);					
		}
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN


//Solucion 2
function Mostrar()
{	
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var numeroIngresado;				
	while(respuesta != 'no'){
		numeroIngresado = prompt('Ingrese un numero (o ingrese "si" para obtener el resultado)'); 
		if(numeroIngresado = 'no' ){
			break;
		}
		contador++;					
		acumulador +=  parseInt(numeroIngresado);							
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN