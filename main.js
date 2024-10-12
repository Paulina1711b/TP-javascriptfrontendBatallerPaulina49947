
//let me pertenee al bloque mientras que var a toda la app por eso usamos let //

//operador de comparacion == este equipara que sean iguLES EN EL MISMO VALOR 
//5 =="5 " Y NOS DEVOLVERA TRUE
//operador de comparacion === en este caso  varia el tipo y el valor 5==="5" nos dara FALSE
//!= es distinto  ejemplo 5!="5" y nos daria FALSE
// En cambio si ponemos  !== 5=="5" nos daria TRUE
// op logicos <,>,>=,<=,&&, ||(el ultimo es el o)

/*EJERCICIO 1.2: Introduccion
// Declarar las variables
let a = 5;
let b = 10;
let c = a + b;

// Imprimir el resultado en la consola
console.log(`La suma de a y b es c = `+ c);*/


/*EJERCICIO 2.1: Operadores logicos y condicionales 
// Declarar las variables
let mayor;
let a = 10;
let b = 20;
if(b<a) {
mayor =a
}else{
mayor =b

}

console.log("El mayor es= " + mayor);*/

/*EJERCICIO 3.1: Operadores de asignacion y bucles
// BUCLES 
// for (let i=0;i<10; i++){

console.log(i);

}
asignacion 
let a=1
a== a+1 op1
a +=1 op2
tb hay para la resta la division y la multiplicacion 
a -=1
a *=1
a /=1

operadores para incrementar i decrementar 
a++
a--
bucle while---
para esto hago un let bandera 


let bandera=0
console.log("bucle while");
while (bandera <10){
console.log(bandera);
bandera++;

}


/*EJERCICIO 1: Operadores de asignacion y bucles
// Inicializar la variable en 10
let numero = 10;
console.log("EJERCICIO 3.1");
// Bucle while que se ejecuta mientras la variable sea mayor que 0
while (numero > 0) {
    // Imprimir el valor actual de la variable
    console.log(numero);

    // Restar 1 a la variable en cada iteración
    numero--;
}

// Imprimir el valor final cuando llegue a 0
console.log(numero); // Esto imprimirá 0 al final */
/*EJERCICIO 1 : Funciones de JavaScript
// Definir la función esPar
let numero;
function esPar(numero) {
  // Verificar si el número es par
  if (numero % 2 === 0) {
      return true;  // Retorna true si es par
  } else {
      return false; // Retorna false si es impar
  }
};
console.log(esPar(16));
console.log(esPar(5));*/


/*EJERCICIO 2 : Funciones en JavaScript
// Definir la función convertirCelsiusAFahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  // Aplicar la fórmula para convertir Celsius a Fahrenheit
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit; // Retornar el valor en Fahrenheit
}

// Probar la función con diferentes valores en Celsius
console.log("Grado F = "+ convertirCelsiusAFahrenheit(30));   
console.log("Grado F = "+ convertirCelsiusAFahrenheit(25));  
console.log("Grado F = "+ convertirCelsiusAFahrenheit(100)); 
console.log("Grado F = "+ convertirCelsiusAFahrenheit(-40));*/


/*EJERCICIO 1: Objetos en JavaScript
// Definir el objeto persona
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",

  // Método para cambiar la ciudad
  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad; // Actualiza la propiedad ciudad
  }
};

// Mostrar las propiedades iniciales en la consola
console.log("Antes de cambiar la ciudad:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

// Usar el método para cambiar la ciudad
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log("\nDespués de cambiar la ciudad:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);*/



/*EJERCICIO 2: Objetos en JavaScript
// Definir el objeto libro
let libro = {
  titulo: "El Alquimista",
  autor: "Paulo Coelho",
  año: 1900,

  // Método para determinar si el libro es antiguo o reciente
  esAntiguo: function() {
      let añoActual = new Date().getFullYear(); // Obtener el año actual
      let edadDelLibro = añoActual - this.año; // Calcular la edad del libro
      return edadDelLibro > 10; // Retorna true si es antiguo, false si es reciente
  }
};

// Determinar si el libro es antiguo o reciente
if (libro.esAntiguo()) {
  console.log("El libro '" + libro.titulo + "' es antiguo.");
} else {
  console.log("El libro '" + libro.titulo + "' es reciente.");
}*/



/*EJERCICIO 1 : Arrays
// Declarar el array numeros con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Usar un bucle for para multiplicar cada número por 2
for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i] * 2; // Multiplicar por 2
    numerosMultiplicados.push(resultado); // Almacenar el resultado en el nuevo array
}

// Mostrar el array original y el nuevo array en la consola
console.log("Array original:", numeros);
console.log("Array con números multiplicados por 2:", numerosMultiplicados);*/


/*EJERCICIO 2 : Arrays
// Crear un array vacío llamado pares
let pares = [];

// Usar un bucle for para iterar hasta 20
for (let i = 0; i <= 20; i++) {
    // Verificar si el número es par
    if (i % 2 === 0) {
        pares.push(i); // Agregar el número par al array
    }
}

// Limitar el array a los primeros 10 números pares
pares = pares.slice(0, 10);

// Imprimir el array pares en la consola
console.log("Los primeros 10 números pares son:", pares);*/


