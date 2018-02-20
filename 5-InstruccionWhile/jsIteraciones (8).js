function Mostrar()
{
	var positivo = 0;
	var negativo = 1;	
	var contador = 0;	
	var respuesta = 'si';
	var numeroIngresado;	
	while(numeroIngresado != respuesta){		
		numeroIngresado = prompt('Ingrese un numero (o ingrese "si" para obtener el resultado)');			
		if(numeroIngresado != respuesta){
			contador++;					
			numeroIngresado =  parseInt(numeroIngresado);
			if(numeroIngresado < 0){
				negativo = negativo * numeroIngresado;
			}
			else{
				positivo = positivo + numeroIngresado;
			}				
		}
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN