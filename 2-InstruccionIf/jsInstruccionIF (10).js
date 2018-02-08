function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor((Math.random() * 10) + 1);
	if( nota < 4){
		alert('Vamos, la proxima se puede');
	}
	else{
		if(nota == 9 || nota == 10){
			alert('EXCELENTE');
		}
		else{
			alert('APROBO');
		}
	}	

}//FIN DE LA FUNCIÓN