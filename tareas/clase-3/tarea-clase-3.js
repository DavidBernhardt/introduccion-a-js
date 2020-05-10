// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
let nombrePropio = 'david';
let nombreHermano1 = 'ian';
let nombreHermano2 = 'fabrizio';
nombreUsuario = prompt('¿Cual es tu nombre?');

if (nombreUsuario.toLowerCase() === nombrePropio){
    console.log(`Hola, ${nombreUsuario}! Yo tambien me llamo ${nombrePropio}`)
}else if(nombreUsuario.toLowerCase() === nombreHermano1){
    console.log(`Hola ${nombreUsuario}!, te llamas igual que mi hermano`);
}else if (nombreUsuario.toLowerCase() === nombreHermano2){
    console.log(`Hola ${nombreUsuario}!, te llamas igual que mi hermano`);
}else{
    console.log(`Hola ${nombreUsuario}!`);
}
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
let miEdad = 20;
edadUsuario = parseInt(prompt("¿Cuantos años tenes?"));

if (edadUsuario === miEdad){
    console.log(`Hola, yo tambien tengo ${miEdad} años!`)
}else if (edadUsuario < miEdad){
    console.log("Hola, tenes menos edad que yo");
}else if (edadUsuario > miEdad){
    console.log("Hola, tenes mas años que yo")
}
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*
const MAYORIA_DE_EDAD = 18;
let respuestaValida=false;
poseeDocumento = prompt("¿Tenes documento?").toLowerCase();

if (poseeDocumento === "si" || poseeDocumento === "no"){
    respuestaValida = true;
}

if (respuestaValida === true){
if (poseeDocumento === "no"){
    console.log("No podes pasar al bar sin documento");
}else if(poseeDocumento === "si"){
    edadUsuario = parseInt(prompt("¿Que edad tenes?"));
    if (edadUsuario != NaN){
    if (edadUsuario < MAYORIA_DE_EDAD){
        console.log("No podes pasar al bar");
    }else if(edadUsuario >= MAYORIA_DE_EDAD){
        console.log("Podes pasar al bar");
    } 
}   
}
}else{
    console.log("No se entendio la respuesta");
}
*/

const MAYORIA_DE_EDAD = 18;
let poseeDocumento = prompt("¿Tenes documento?").toLowerCase();
let edadUsuario = parseInt(prompt("¿Cual es tu edad?"));

function respuestaValida(poseeDocumento,edadUsuario){
    if((poseeDocumento === "si" || poseeDocumento === "no") && !isNaN(edadUsuario)){
        return true;
    }
    return false;
}

if (respuestaValida(poseeDocumento,edadUsuario)){
    if (poseeDocumento == "no"){
        console.log("No podes pasar al bar sin documento");
    }else if (edadUsuario < MAYORIA_DE_EDAD){
        console.log("No tenes edad para pasar al bar");
    }else if(edadUsuario >= MAYORIA_DE_EDAD){
        console.log("Podes pasar al bar");
    }
}else {
    console.log("No se entendio la respuesta");
}
