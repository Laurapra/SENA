let a=5;
let b=2;
console.log(a+b); //suma:7
console.log(a-b); //resta:3
console.log(a*b); //multiplicacion:10
console.log(a/b); //division: 2.5
console.log(a%b); //modulo: 1(el resto de la division)

//operadores de asignación
let y = 5;
y += 3; // Equivale a: y = y + 3
console.log(y); // 8

let z = 10;
z -= 2; // Equivale a: z = z - 2
console.log(z); // 8

//operadores de comparación
let l = 5;
let u = 10;

console.log(l == u); // false (l es diferente de u)
console.log(l != u); // true (l es diferente de u)
console.log(l > u); // false (l es menor que u)
console.log(l < u); // true (l es menor que u)
console.log(l >= u); // false (l no es mayor o igual que u)
console.log(l <= u); // true (l es menor o igual que u)

//operadores lógicos
let r = 5;
let i = 10;
let c = 2;

console.log(r > i && i > c); // false (r no es mayor que b)
console.log(r > i || i > c); // true (b es mayor que c)
console.log(!(r > i)); // true (r no es mayor que i)

//operadores de incremento
let x = 5;
x++; // x ahora es igual a 6

let j = 10;
j--; // j ahora es igual a 9

let q = 3;
let e = ++q; // q es incrementado en 1 y luego asignado a e, por lo que q es igual a 4 y e es igual a 4

let g = 3;
let d = g++; // g es asignado a d y luego incrementado en 1, por lo que g es igual a 4 y d es igual a 3

let t = 5;
t += 3; // t ahora es igual a 8

let w = 0;
while (w < 5) {
  console.log(w);
  w++; // incrementa w en 1 en cada iteración del bucle
}


//operadores de concatenación
let nombre = "Laura";
let apellido = "Rodríguez";

console.log(nombre + " " + apellido); // "Laura Rodríguez"

//operadores ternario
let edad = 20;

console.log(edad >= 18 ? "Es mayor de edad" : "Es menor de edad"); // "Es mayor de edad"
