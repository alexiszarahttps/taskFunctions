// Ejercicio 1

function multiplicacion() {
    let edad = prompt("escriba su edad: ")
    let perro = parseInt(edad) * 7
    alert(perro)
}
multiplicacion();


// Ejercicio 2

function saludo(){
    let nombre = nombre("escriba su nombre: ")
    alert("Hola " + nombre + ", como estas?")
}       
saludo();


// Ejercicio 3

function bienvenida() {
    alert("Bienvenido!")
}
bienvenida();


// Ejercicio 4

let celsius = prompt("escriba la temperatura en celsius: ");
let temperaturafarenheit = prompt("escriba la temperatura en farenheit: ");

function calculadoraFarenheit(a,b){
    let farenheit = (parseInt(a) * 1.8) + 32;
    alert("La temperatura es de " + farenheit + "F°");
    let temperatura = (parseInt(b)-32) / 1.8;
    alert("La temperatura es de " + temperatura + "C°");
}
calculadoraFarenheit(celsius,temperaturafarenheit);


// Ejercicio 5

let numero = prompt("Ingrese un numero");

function ejercicioCinco(numero) {
    if ((numero >= 5) && (numero <= 10)) {
        for(let i = numero - 1; i >= 1; i--) {
            numero = numero * i;
        } console.log(numero) 
    } else if (numero < 5) {
        console.log(Math.abs(numero));
    } else if (numero > 10) {
        numero = numero * 2;
        alert(numero)
    }
}


// Ejercicio 6

let edadUsuario = prompt("Ingrese su edad");
let bebida = prompt("Ingrese una bebida entre cerveza, jugo y agua");
let billeteCliente 
let vuelto

function validarEdad(a,b,c,d) {
    if (a < 18 && b == "cerveza") {
        alert("Sos menor de edad, no podés realizar la compra!")
    } else {
        c = prompt("El costo es de $50. Ingrese con cuanto va a pagar")
        d = 50 - c
        if (c < 50) {
            alert("Error. Pague con otro billete de mayor valor")
        } else {
        alert("Su vuelto es de $" + d);
    }
} }
validarEdad(edadUsuario,bebida,billeteCliente,vuelto);

// Ejercicio 7

let horas = prompt("Escriba las horas que quieras");
let minutos = prompt("Escriba los minutos que quiera");
let segundos = prompt("Escriba los segundos que quiera");

function conversion(a, b, c) {
  horas1 = parseInt(a) * 3600;
  minutos1 = parseInt(b) * 60;
  segundos1 = parseInt(c) * 1;
  alert("La conversion de horas a segundos es de: " + horas1);
  alert("La conversion de minutos a segundos es de: " + minutos1);
  alert("La conversion de segundos a segundos es de: " + segundos1);
}

conversion(horas, minutos, segundos);


// Ejercicio 8

let valores = [56, 41, 0, 4, 100];
let suma = valores.reduce((previo, actual) => actual += previo);
let resultado = suma / valores.length;

console.log(resultado);
