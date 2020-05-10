//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

for (let i=0; i<=10; i++){
  console.log(i)
}

 //Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 //1 3 5 ... 99

 for (let i=0; i<=100; i++){
   if (i%2 != 0){
      console.log(i);
   }
 }


Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

 for (let i=0; i<=10; i++){
   console.log(7*i);
 }
*/
/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

for (let i=1; i<=9; i++){
  for (let j=0; j<=9; j++){
    console.log(`${i} * ${j} = ${i*j}`);
  } 
}

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], suma = 0;
for (let i=0; i<numeros.length; i++){
  suma = suma + numeros[i];
}
console.log(suma);

Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1

let factorial = 1;
for (let i=1; i<=10; i++){
  factorial = factorial * i;
  console.log(`${i}! = ${factorial}`);
}

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

let suma = 0;
for (let i=11; i<30; i++){
  if (i%2 != 0){
    suma = suma + i;
    console.log([`${suma-i} + ${i} = ${suma}`]);
  }
}


Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

function celsiusToFahrenheit(tempC){
  return tempC * (9/5) + 32;
}
let tempC = prompt("Ingrese la temperatura en grados celsius");
let tempF = celsiusToFahrenheit(tempC);
alert(`${tempC}ºC son ${tempF}Fº`);

Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

function fahrenheitToCelsius(tempF){
  return (tempF - 32) * (5/9);
}
let tempF = prompt("Ingrese la temperatura en grados Fahrenheit");
let tempC = fahrenheitToCelsius(tempF);
alert(`${tempF}ºF son ${tempC}Cº`);

Desafío de programación #10: Calcula la suma de todos los números en un array de números

Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function promedio(numeros){
  let sumaNumeros = 0;
  for (let i=0; i<numeros.length; i++){
    sumaNumeros = sumaNumeros + numeros[i];
  }
  return sumaNumeros / numeros.length;
}
console.log(`El promedio es ${promedio(numeros)}`);

Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

let numeros = [1, -2, 3, -4, 5, 6, -7, 8, -9, -10];
function positivos(numeros){
  let numerosPositivos = [];
  for (let i=0; i<numeros.length; i++){
    if (numeros[i] > 0){
      numerosPositivos.push( numeros[i] );
    }
  }
  return numerosPositivos;
}
console.log(numeros);
console.log( positivos(numeros) );

Desafío de programación #13: Find the maximum number in an array of numbers

let numeros = [10, -2, 3, -4, 5, 6, -7, 8, -9, -10];
function mayorValor(numeros){
  let mayor = numeros[0];
  for (let i=0; i<numeros.length; i++){
    if (numeros[i] > mayor){
      mayor = numeros[i];
    }
  }
  return mayor;
}
console.log(`El mayor valor del array es ${mayorValor(numeros)}`);

Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55


serieFibonacci = [0, 1];
for (let i=2; i<=10; i++){
  nuevoTermino = serieFibonacci[i-1] + serieFibonacci[i-2];
  serieFibonacci.push(nuevoTermino);
}
console.log(serieFibonacci);


Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión


function encontrarFibonacci(n){
  if (n = 0) {return 0;}
  if (n = 1) {return 1;}
  return encontrarFibonacci(n-1) + encontrarFibonacci(n-2);
}
let termino = Number(prompt("Ingrese el termino a buscar:"));
console.log (encontrarFibonacci(termino));


Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function esPrimo(n){
  for (let i = 2; i<10; i++){
    if (n%i == 0 && i != n){
      return false;
    }
  }
  return true;
}


Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10

function sumarDigitos(n){
  let suma = 0;
  let digitos = n.toString().length;
  let digitos2 = parseInt(math.log10(n)) + 1;
  for (i=1; i<digitos; i++){

  }
}

Desafío de programación #18: Imprimir los primeros 100 números primos


function esPrimo(n){
  for (let i=2; i<10; i++){
    if (n%i == 0 && n!=i){
      return false;
    }
  }
  return true;
}

function imprimirPrimos(r){
  let cantidadPrimos = 0;
  let n = 1;
  console.log("Primeros "+r+" numeros primos:")
  while (cantidadPrimos < r){
    if (esPrimo(n)){
      console.log(n+" es primo");
      cantidadPrimos++;
    }
    n++;
  }
  return;
}
imprimirPrimos(100);


Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]


function esPrimo(n){
  for(let i=2; i<10; i++){
    if (n%i == 0 && n!=i){
      return false;
    }
  }return true;
}

function arrayPrimosMayores(alComienzo, cantidadPrimos){
  let n = alComienzo;
  let arrayPrimos = [];
  while (arrayPrimos.length < cantidadPrimos){
    if (esPrimo(n)){
      arrayPrimos.push(n)
    }
    n++;
  }
  return arrayPrimos;  
}
console.log("HOLA!");
const alComienzo = Number(prompt("¿A partir de que numero desea imprimir numeros primos?"));
const cantidadPrimos = Number(prompt("¿Cuantos numeros deseas imprimir?"));
console.log(
  arrayPrimosMayores (alComienzo, cantidadPrimos)
);


Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]


let array = [9,1,2,3,4];
console.log(array); //Array antes de ordenar
let aux = array[0];
for (let i=0; i<array.length-1; i++){
  array[i] = array[i+1];
 }
 array[array.length-1] = aux;
console.log(array); //Array ordenado


Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

let array = [2,3,4,1];
console.log(array);
let aux = array[array.length-1];
for (let i=array.length-1; i>=0; i--){
  array[i] = array[i-1];
}
array[0] = aux;
console.log(array);


Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

function invertir(array){
  let arrayInvertido=[];
  for (let i = array.length-1; i >= 0; i--){
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

let array = [1, 2, 3, 4];
console.log(`Array sin invertir: ${array}`);
console.log(`Array invetido: ${invertir(array)}`);


Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"


function invertirTexto(texto){
  let textoInvertido = "";
  for (let i = texto.length-1; i >= 0; i--){
    textoInvertido += texto[i];
  }
  return textoInvertido;
}

let texto = "Hola mundo!";
console.log (texto);
console.log (invertirTexto(texto));


Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


function sumarArrays(array1, array2){
  let arrayTotal = [];
  for (let i=0; i <= array1.length-1; i++){
    arrayTotal.push( array1[i] );
  }
  
  for (let i=0; i <= array2.length-1; i++){
    arrayTotal.push( array2[i] );
  }
  return arrayTotal;
}
let numeros = [1, 2, 3];
let letras = ["a", "b", "c"];
console.log ( sumarArrays(numeros, letras) );


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos


function diferenciaSimetrica (ar1, ar2){
  let arrayDesiguales = [];
  for (let i=0; i <= ar1.length-1; i++){
    if ( !contiene(ar1[i], ar2) ){
      arrayDesiguales.push(ar1[i]);
    }
  }
  
  for (let i=0; i <= ar2.length-1; i++){
    if ( !contiene(ar2[i], ar1) ){
      arrayDesiguales.push(ar2[i]);
    }
  }
  return arrayDesiguales;
}

function contiene(n, ar){
  for (let i=0; i <= ar.length-1; i++){
    if (n == ar[i]){
      return true;
    }
  }
  return false;
}

let ar1 = [1, 2, 3, 4], ar2 = [6, 5, 4, 3];
console.log(ar1);
console.log(ar2);
console.log(diferenciaSimetrica(ar1, ar2));


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers

function sumaPrimos(nTerminos){
  let n = 1, suma = 0, terminosSumados = 0;
  let primo;
  while (terminosSumados < nTerminos){
    primo = true;
    for (let i=2; i<=9; i++){
      if (n%i == 0 && n != i){
        primo = false;
      }
    }
    if (primo == true){
      suma += n;
      terminosSumados++;
    }
    n++;
  }
  return suma;
}

Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
*/