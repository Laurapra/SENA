let vector1 = [];
let vector2 = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Ingrese el número ${i + 1} del primer vector:`));
  while (i > 0 && numero <= vector1[i - 1]) {
    numero = parseInt(prompt(`Número inválido. Ingrese el número ${i + 1} del primer vector:`));
  }
  vector1.push(numero);
}

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Ingrese el número ${i + 1} del segundo vector:`));
  while (i > 0 && numero <= vector2[i - 1]) {
    numero = parseInt(prompt(`Número inválido. Ingrese el número ${i + 1} del segundo vector:`));
  }
  vector2.push(numero);
}

let vectorMezclado = vector1.concat(vector2).sort(function(a, b) {
  return a - b;
});

console.log(vectorMezclado);
