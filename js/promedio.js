 // Función

 function calcularPromedio(notas) {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
      total += parseFloat(notas[i]);
    }
    return total / notas.length;
  }

  // Función principal
  
  function main() {
    // Obtener el nombre del estudiante
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");

    // Mostrar mensaje de bienvenida
    alert("¡Bienvenido, " + nombre + " " + apellido + "!");

    // Obtener las notas del estudiante
    const notas = [];
    for (let i = 0; i < 3; i++) {
      const nota = prompt("Ingrese la nota " + (i + 1) + ":");
      notas.push(parseFloat(nota));
    }

    // Calcular el promedio
    const promedio = calcularPromedio(notas);

    // Mostrar el resultado
    alert("El promedio de las notas ingresadas es: " + promedio.toFixed(2));
  }

  // Llamar a la función principal
  main();