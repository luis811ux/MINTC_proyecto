let matrizX = [];
let matrizY = [];
let matrizZ = [];
let tam = 0;
//Variables Globales: Declaradas fuera de funciones o bloques; accesibles en cualquier parte del código.
// Variables Locales: Declaradas dentro de funciones o bloques; solo accesibles dentro de ese contexto.
// var: Alcance de función.
// let y const: Alcance de bloque.

// prueba();
// function prueba() {
//   var x = 10; // Variable local con var
//   let y = 20; // Variable local con let
//   const z = 30; // Variable local con const

//   if (true) {
//       var x = 40; // Esto cambia el valor de x en toda la función
//       let y = 50; // Esto es una nueva variable y solo existe dentro del bloque
//       console.log(x); // 40
//       console.log(y); // 50
//   }

//   console.log(x); // 40 (porque var tiene alcance de función)
//   console.log(y); // 20 (la y de afuera, no se ha cambiado)
//   console.log(z); // 30
// }

//Usar siempre let porque yo defino hasta donde es el alcance de la variable: global, o local dentro una funcion o un bloque



// {/* <input type="button" onClick="cargarTamano()" value="Cargar Matrices"></input> */}
function cargarTamano() {
  // Usa solamente parseInt o si quieres redondear una cadena que representa un número, primero debes convertir esa cadena a un número. Esto se puede hacer usando parseFloat o parseInt, y luego aplicar Math.round.
tam = parseInt(document.getElementById('tamano').value);
cargarMatrices(matrizX, 'matrizX');
cargarMatrices(matrizY, 'matrizY');
}
//esta fucion crea una matriz vacia de tamaño cuadrado dado por el usuario
function cargarMatrices(matriz, divId) {
if (tam > 0) {
matriz.length = tam; // Asegurarse de que la longitud de la matriz sea correcta
for (let i = 0; i < tam; i++) {
matriz[i] = new Array(tam);
// En cada iteración del bucle, se asigna a matriz[i] un nuevo array tamaño= tam 
// para hacer un arreglo vacio con un tamaño definido: let arregloConTamano = new Array(tamano);  
document.getElementById('longitud').innerText = `El tamaño de las matrices es: ${tam} x ${tam}`;
}

generarMatrices(matriz, divId); // Se trasnmite automaticamente los parametros (matriz y el divID ) de la funcion externa a la funcion interna 
} else {
document.getElementById('longitud').innerText = "Por favor, introduce un tamaño válido.";
}
}
// Aun si la función externa ha terminado de ejecutarse, la función interna todavía puede acceder a sus variables y parámetros.
// esta funcion crea la tabla de inputs para que el usuario los rellene
function generarMatrices(matriz, divId) {
let matrizDiv = document.getElementById(divId); // Obtener el div correspondiente
matrizDiv.innerHTML = ''; // Limpiar el contenido anterior
let formulario = "<table border='1' cellspacing='0' cellpadding='5'>"; // Iniciar la tabla
for (let i = 0; i < tam; i++) {
formulario += "<tr>"; // Iniciar una nueva fila
for (let j = 0; j < tam; j++) {
formulario += `<td><input type='text' id='${divId.charAt(divId.length - 1)}_${i}_${j}' size='3'></td>`; 
// '${divId.charAt(divId.length - 1)}_${i}_${j}':
// ${...}: todo lo que este dentro de las llaves son funciones=metodos y, variables que se evaluan

// divId=matrizX el parametro para la matriz X y
// divId=matrizY  por lo tanto captura los textos de los ID.
// divId.length: Devuelve la longitud de la cadena divId.
// divId.length - 1: Esto obtiene el índice del último carácter de la cadena (ya que los índices comienzan en 0).
// divId.charAt(...): Este método devuelve el carácter en la posición especificada. En este caso, devuelve el último carácter de la cadena divId= X para la matrizX y Y para la matrizY.


//Esta funcion carga los valores ingresado en los datos ingresados por el usuario en los input  en las matrices X y Y 
}
formulario += "</tr>"; // Cerrar la fila
}
formulario += "</table>"; // Cerrar la tabla
matrizDiv.innerHTML = formulario; // Mostrar tabla
}
function mostrarMatrices() {
for (let i = 0; i < tam; i++) {
for (let j = 0; j < tam; j++) {
let valorX = parseFloat(document.getElementById(`X_${i}_${j}`).value);
let valorY = parseFloat(document.getElementById(`Y_${i}_${j}`).value);
matrizX[i][j] = isNaN(valorX) ? 0 : valorX; // VAriable global, Almacenar valores en matriz X, usar 0 si no es un número
matrizY[i][j] = isNaN(valorY) ? 0 : valorY; // VAriable global, Almacenar valores en matriz Y, usar 0 si no es un número
}
}
imprimirMatriz(matrizX, 'resultadoX'); // Imprimir matriz X
imprimirMatriz(matrizY, 'resultadoY'); // Imprimir matriz Y

matrizZ = sumarMatrices(matrizX, matrizY); // Sumar matrices, 
imprimirMatriz(matrizZ, 'resultadoZ'); // Imprimir matriz Z

matrizZ = restarMatrices(matrizX, matrizY); // Restar matrices, 
imprimirMatriz(matrizZ, 'resultadoZ2'); // Imprimir matriz Z
}

function imprimirMatriz(matriz, resultadoId) {
let resultadoDiv = document.getElementById(resultadoId);
resultadoDiv.innerHTML = ''; // Limpiar el contenido anterior
let resultadoHTML = "<table border='1' cellspacing='2' cellpadding='24'>"; // Iniciar la tabla
for (let i = 0; i < tam; i++) {
resultadoHTML += "<tr>"; // Iniciar una nueva fila
for (let j = 0; j < tam; j++) {
resultadoHTML += `<td>${matriz[i][j]}</td>`; // Imprimir valor de la matriz en una celda
}
resultadoHTML += "</tr>"; // Cerrar la fila
}
resultadoHTML += "</table>"+"<br>"; // Cerrar la tabla
resultadoDiv.innerHTML = resultadoHTML; // Mostrar la tabla en el div de resultado
}


function sumarMatrices(matriz1, matriz2) {
// let matrizZ = new Array(tam);
for (let i = 0; i < tam; i++) {
matrizZ[i] = new Array(tam);//se crean los espacios vacios una fila a la vez y se rellenan con la suma, luego se crea la siguiente fila y se rellenan con la suma, hasta terminar
for (let j = 0; j < tam; j++) {
matrizZ[i][j] = matriz1[i][j] + matriz2[i][j]; // Sumar elementos
}
}

return matrizZ; // Devolver matriz Z, Retorna la suma de las matrices y queda enciama del llamado de la funcion imprimirMatriz(matrizZ, 'resultadoZ');


}

function restarMatrices(matriz1, matriz2) {
  // let matrizZ = new Array(tam);
  for (let i = 0; i < tam; i++) {
  matrizZ[i] = new Array(tam);//se crean los espacios vacios una fila a la vez y se rellenan con la suma, luego se crea la siguiente fila y se rellenan con la suma, hasta terminar
  for (let j = 0; j < tam; j++) {
  matrizZ[i][j] = matriz1[i][j] - matriz2[i][j]; // Sumar elementos
  }
  }
  
  return matrizZ; // Devolver matriz Z, Retorna la suma de las matrices y queda enciama del llamado de la funcion imprimirMatriz(matrizZ, 'resultadoZ');
}

function regresar() {
  window.location.href="../../index.html"}