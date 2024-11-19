function dibujarTablero(){
    const nmr = Number(document.getElementById("valor").value); //Almacenamos en una constante el valor que introduce el usuario
    const t = document.getElementById("container"); //Almacenamos en una constante el section donde se va a dibujar 
    t.innerHTML = "";
    
    try{
        //Control de errores
        if(nmr > 30) throw "No puedes crear el tablero de un número mayor que treinta.";
        if(nmr < 5) throw "No puedes crear el tablero de un número menor que cinco.";

        //Bucle para pintar el tablero.
        for(i = 0; i < nmr; i++){
            t.innerHTML += "<div class='row'>"+ "<button></button>".repeat(nmr) + "</div> \n";
        }
    }catch (error){
        t.innerHTML = error;
    }
    

}