const prompt = require("prompt-sync")();
// Definición de la clase Persona
class Persona {
    constructor(nombre, identificacion, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen, cancionesFavoritas) {
      this.nombre = nombre;
      this.identificacion = identificacion;
      this.fechaNacimiento = fechaNacimiento;
      this.correoElectronico = correoElectronico;
      this.ciudadResidencia = ciudadResidencia;
      this.ciudadOrigen = ciudadOrigen;
      this.cancionesFavoritas = cancionesFavoritas;
    }
  }
  
  // Declaración de variables globales
  let personas = [];
  
  // Función para agregar una nueva persona
  function agregarPersona() {
    let nombre = prompt("Ingrese el nombre de la persona:");
    let identificacion = prompt("Ingrese el número de identificación de la persona:");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento de la persona (formato dd/mm/aaaa):");
    let correoElectronico = prompt("Ingrese el correo electrónico de la persona:");
    let ciudadResidencia = prompt("Ingrese la ciudad de residencia de la persona:");
    let ciudadOrigen = prompt("Ingrese la ciudad de origen de la persona:");
  
    let cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
      let artista = prompt(`Ingrese el artista de la canción ${i+1}:`);
      let titulo = prompt(`Ingrese el título de la canción ${i+1}:`);
      cancionesFavoritas.push({artista: artista, titulo: titulo});
    }
  
    let persona = new Persona(nombre, identificacion, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen, cancionesFavoritas);
    personas.push(persona);
  
    console.log(`La persona ${nombre} ha sido agregada correctamente.`);
  }
  
  // Función para mostrar la información personal de una persona particular
  function mostrarInformacionPersona() {
    let posicion = parseInt(prompt("Ingrese la posición de la persona a consultar:"));
    let persona = personas[posicion];
  
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Identificación: ${persona.identificacion}`);
    console.log(`Fecha de nacimiento: ${persona.fechaNacimiento}`);
    console.log(`Correo electrónico: ${persona.correoElectronico}`);
    console.log(`Ciudad de residencia: ${persona.ciudadResidencia}`);
    console.log(`Ciudad de origen: ${persona.ciudadOrigen}`);
    console.log("Canciones favoritas:");
    persona.cancionesFavoritas.forEach(function(cancion, indice) {
      console.log(`Canción ${indice + 1}: ${cancion.titulo} - ${cancion.artista}`);
    });
  }
  
  // Función para mostrar el menú de opciones
  function mostrarMenu() {
    let opcion = prompt(`Seleccione una opción:
    1. Agregar una persona
    2. Mostrar la información personal de una persona particular
    3. Salir`);
    switch (opcion) {
      case "1":
        agregarPersona();
        mostrarMenu();
        break;
      case "2":
        mostrarInformacionPersona();
        mostrarMenu();
        break;
      case "3":
        console.log("Saliendo del programa.");
        break;
      default:
        console.log("Opción inválida. Intente de nuevo.");
        mostrarMenu();
        break;
    }
  }
  
  // Llamada a la función para mostrar
  