function bienvenida(){
    alert("Bienvenido a Mar del Cine, te recomendaremos una pelicula y una serie, solo debes elegir plataforma y genero")
}

bienvenida()

let genero = parseInt(prompt("Selecciona el número correspondiente al género de deseas ver. 1-DRAMA / 2-TERROR / 3-COMEDIA"));
let plataforma = parseInt(prompt("Selecciona el número correspondiente a la plataforma. 1-NETFLIX - 2-HBOMAX - 3-PRIME VIDEO"));



if ((genero == 1 ) && (plataforma == 1)) {
    alert("Pelicula: El Faro / Serie: The Crown");
} else if((genero == 1) && (plataforma == 2)){
    alert("Pelicula: Moonlight / Serie: Succession");
} else if((genero == 1) && (plataforma == 3)){
    alert("Pelicula: Match Point / Serie: Mr. Robot");
} else if((genero == 2) && (plataforma == 1)){
    alert("Pelicula: El hombre invisible / Serie: La maldición de Hill House");
} else if((genero == 2) && (plataforma == 2)){
    alert("Pelicula: La visita / Serie: 30 monedas");
} else if((genero == 2) && (plataforma == 3)){
    alert("Pelicula: Ghostland / Serie: Them");
} else if((genero == 3) && (plataforma == 1)){
    alert("Pelicula: Bo Burnham: Inside / Serie: Brooklyn Nine-Nine");
} else if((genero == 3) && (plataforma == 2)){
    alert("Pelicula: Un juego entre amigos / Serie: Hacks");
} else if((genero == 3) && (plataforma == 3)){
    alert("Pelicula: Emergency / Serie: The Boys");
} else {
    alert("Ingresaste un dato no válido, recuerda que debes ingresar la opcion numerica correspondiente");
    }

