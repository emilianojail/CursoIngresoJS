function Mostrar()
{
//tomo la edad

    var edad;
    edad = document.getElementById('edad').value;    
    if(edad < 13){
        alert('es un niño'); 
    }
    else{
        if(edad < 18){
            alert('es un adolescente'); 
        }
        else{
            alert('es un adulto'); 
        }
    }

}//FIN DE LA FUNCIÓN