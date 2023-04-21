const prompt = require("prompt-sync")();

let figuras= prompt("Bienvenido al menú, por favor elige una Triangulo=1  Rectangulo=2  Cuadrado=3  Circulo=4")
let base;
let altura;
let area;
let perimetroa;
let perimetrob;
let perimetroc;
let perimetroTotal;
let radio;
const pi=3.14

switch (figuras) {
    case "1":
        base= parseInt(prompt("Ingresa la base del triángulo: "));
        altura= parseInt(prompt("Ingresa la altura del triángulo: "));
        area= ((base*altura)/2);
        perimetroa= parseInt(prompt("Ingresa el perimetro a: "));
        perimetrob= parseInt(prompt("Ingresa el perimetro b: "));
        perimetroc= parseInt(prompt("Ingresa el perimetro c: "));
        perimetroTotal= perimetroa+perimetrob+perimetroc;

        console.log("El área del triángulo es: " + area);
        console.log("El perímetro del triángulo es: " + perimetroTotal);
        break;
    case"2":
        base= parseInt(prompt("Ingresa la base de rectangulo: "));
        altura= parseInt(prompt("Ingresa la altura del rectangulo: "));
        area= base+altura
        perimetroa= parseInt(prompt("Ingresa el perimetro a: "));
        perimetrob= parseInt(prompt("Ingresa el perimetro b: "));
        perimetroTotal= (2*(perimetroa+perimetrob));

        console.log("El área del rectangulo es: " + area);
        console.log("El perimetro del rectangulo es: " + perimetroTotal);
        break;
    case"3":
        altura= parseInt(prompt("Ingresa la altura del cuadrado: "));
        perimetroa= (4*altura);
        area= Math.pow(altura,2);

        console.log("El perimetro del cuadrado es: " + perimetroa);
        console.log("El área del cuadrado es: " + area);
        break;
    case"4":
        radio= parseInt(prompt("Ingresa la circunferencia del círculo: "));
        perimetroa= (2*pi*Math.pow(radio,2));
        area= (pi*Math.pow(radio,2));

        console.log("El perimetro del circulo es: " + perimetroa);
        console.log("El área del circulo es: " + area);
        break;
    default:
        console.log("Opción no válida, por favot ingresar una de las 4 opciones.");
}