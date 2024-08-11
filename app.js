//EJERCICIO Nº 1

const arraynumeros = [2, 6, 1, 8];

function calcPromedio(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma / numeros.length;
}

const promedio = calcPromedio(arraynumeros);
console.log(`Promedio: ${promedio}`);


//EJERCICIO Nº 2

const arraynum = [4, 8, 5, 3];

function last(numeros) {

  let ultimo = numeros[numeros.length - 1];
  console.log(`El último Nº del arreglo es: ${ultimo}`);

}

last(arraynum);


//EJERCICIO Nº 3

function sumarPares(nums) {
  let suma = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      suma += nums[i];
    }
  }

  return suma;
}

const numeros = [1, 2, 5, 8, 9, 12, 2, 3];
const sumPares = sumarPares(numeros);
console.log("La suma de los números pares es:", sumPares);


//EJERCICIO Nº 4

function calcFactorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

const numero = prompt("Ingrese un número para calcular su factorial:");

const resultado = calcFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);


//EJERCICIO Nº 5

let i = 1;

do {
  if (i % 2 == 0) {
    console.log(i + " es par");
  } else {
    console.log(i + " es impar");
  }
  i++;
} while (i <= 15);


//EJERCICIO Nº 6

function loteria(num1, num2) {

  for (let i = 1; i <= 50; i++) {
    if (i == num1 || i == num2) {
      console.log("LOTERÍA!");
    } else {
      console.log(i);
    }
  }
}

const num01 = prompt("Ingrese un número [1..50]:");
const num02 = prompt("Ingrese un segundo [1..50]");

loteria(num01, num02);


//EJERCICIO Nº 7

let j = 1;

while (j <= 100) {

  if (j % 3 == 0 && j % 5 == 0) {
    console.log("FizzBuzz");
  } else if (j % 3 == 0) {
    console.log("Fizz");
  } else if (j % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(j);
  }
  j++;
}


//EJERCICIO Nº 8

let rpta = 'S';

while (rpta === 'S') {

  const enterTopping = prompt("¿Qué marca de helado quieres comprar? (OREO, KITKAT, BROWNIE)");
  const topping = enterTopping.toUpperCase();


  let costoTotal = 0;
  const sinTopping = 50;

  switch (topping) {
    case "OREO":
      costoTotal = sinTopping + 10;
      console.log(`El topping de OREO cuesta: ${costoTotal} MXN`);
      break;
    case "KITKAT":
      costoTotal = sinTopping + 15;
      console.log(`El topping de KITKAT cuesta: ${costoTotal} MXN`);
      break;
    case "BROWNIE":
      costoTotal = sinTopping + 20;
      console.log(`El topping de BROWNIE cuesta: ${costoTotal} MXN`);
      break;
    default:
      console.log(`No tenemos ese topping, lo sentimos. El precio del helado sin topping cuesta: ${sinTopping} MXN`);
      break;
  }

  rpta = prompt("¿Deseas comprar otro helado? (S/N)");
  rpta = rpta.toUpperCase();

}

console.log("Gracias por tu compra");


// EJERCICIO Nº 9

const nivel = parseInt(prompt("Elige nivel del curso: [1] COURSE, [2] CARRERA, [3] MASTER"));

let costoxMes;
let nroMeses;


const costo = {
  course: 4999,
  carrera: 3999,
  master: 2999
};
const duracion = {
  course: 2,
  carrera: 6,
  master: 12
};

switch (nivel) {
  case 1:
    costoxMes = costo.course;
    nroMeses = duracion.course;
    break;
  case 2:
    costoxMes = costo.carrera;
    nroMeses = duracion.carrera;
    break;
  case 3:
    costoxMes = costo.master;
    nroMeses = duracion.master;
    break;
  default:
    console.log("No existe ese nivel");
    break;
}

if (costoxMes) {

  const beca = parseInt(prompt("¿Cuenta con BECA? ([1] FACEBOOK [2] GOOGLE [3] JESUA) [4] NO BECADO"));
  let descuento = 0;

  switch (beca) {
    case 1:
      descuento = 0.2;
      break;
    case 2:
      descuento = 0.15;
      break;
    case 3:
      descuento = 0.5;
      break;
    case 4: 
      descuento = 0;
      break;
    default:
      console.log("BECA ERRÓNEA");
      descuento = 0;
      break;
  }

  const descuentoxMes = costoxMes * descuento;
  const gastoTotal = (costoxMes - descuentoxMes) * nroMeses;

  console.log(`El costo x mes del programa elegido es: $ ${costoxMes} MXN con un descuento de: ${descuento*100}%. Duración y costo total del curso: ${nroMeses} meses = $ ${gastoTotal}`);
}


//EJERCICIO 10

const vehiculo = parseInt(prompt("Tipo de vehículo?: [1] COCHE, [2] MOTO, [3] AUTOBUS"));

const kms = parseInt(prompt("Ingresa los kilómetros recorridos:"));
const litros = parseInt(prompt("Ingresa los litros consumidos:"));

let precioxKilometro;

switch (vehiculo) {
  case 1:
    precioxKilometro = 0.20;
    break;
  case 2:
    precioxKilometro = 0.10;
    break;
  case 3:
    precioxKilometro = 0.50;
    break;
  default:
    console.log("Tipo de vehículo no válido.");
    precioxKilometro = 0;
    break;
}

let extraxLitros;

if (litros > 0 && litros <= 100) {
  extraxLitros = 5;
}
else {
  extraxLitros = 10;
}

const pagoTotal = (precioxKilometro * kms) + extraxLitros;

console.log(`Total a pagar: ${pagoTotal} MXN`);
