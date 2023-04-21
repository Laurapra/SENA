let edades = [];

for (let i = 0; i < 10; i++) {
  let edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));
  while (edad < 1 || edad > 120) {
    edad = parseInt(prompt(`Edad inválida. Ingrese la edad de la persona ${i + 1}:`));
  }
  edades.push(edad);
}

let menores = 0;
let mayores = 0;
let adultosMayores = 0;
let edadMinima = edades[0];
let edadMaxima = edades[0];
let sumaEdades = 0;

for (let i = 0; i < edades.length; i++) {
  if (edades[i] < 18) {
    menores++;
  } else {
    mayores++;
    if (edades[i] >= 60) {
      adultosMayores++;
    }
  }
  if (edades[i] < edadMinima) {
    edadMinima = edades[i];
  }
  if (edades[i] > edadMaxima) {
    edadMaxima = edades[i];
  }
  sumaEdades += edades[i];
}

let promedio = sumaEdades / edades.length;

console.log(`Cantidad de personas menores de edad: ${menores}`);
console.log(`Cantidad de personas mayores de edad: ${mayores}`);
console.log(`Cantidad de adultos mayores: ${adultosMayores}`);
console.log(`Edad mínima: ${edadMinima}`);
console.log(`Edad máxima: ${edadMaxima}`);
console.log(`Promedio de edades: ${promedio}`);
