function Mostrar()
{
	var contador;
	var acumulador;	
	acumulador = 0;
	contador = 0;

	while(contador < 5){
		contador++;
		acumulador += parseInt(prompt('Ingrese un numero'));
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/5;

}//FIN DE LA FUNCIÓN