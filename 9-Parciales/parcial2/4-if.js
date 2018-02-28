//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;
	var fueMultiplicado;

	numero1 = prompt('Ingresar un numero');
	numero2 = prompt('Ingresar otro numero');

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	if (numero1 == numero2) {
		resultado = numero1.toString() + numero2.toString();
	}

	if(numero1 > numero2){
		resultado = numero1 * numero2;
		fueMultiplicado = true;
	}

	if(numero1 < numero2){
		resultado = numero1 - numero2;
	}
	
	if(fueMultiplicado && (resultado % 2 == 0 && resultado != 0)){
		document.write('El resultado es: ' + resultado + ' es par');
	}
	else{
		document.write('El resultado es: ' + resultado);
	}

}

//No hay que validar nada. solo if o switch.

/*
se ingresan 2 numeros.
si son iguales, se concatenan,
si el primero es mayor que el segundo, se multiplican,
si el segundo es mas grande, se restan,
si la multiplicacion, da un numero par, ademas de mostrar el resultado se muestra el mensaje "es par"
*/