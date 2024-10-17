// variables globales tipo cosntantes porq su contenido no va cambiar (filas, colinas y minas) y su referencia no va a cambiar (tablero= seguira siendo matriz)
const filas = 5; // Número de filas
const columnas = 5; // Número de columnas
const minas = 5; // Número de minas
const tablero = []; // Matriz del tablero

// Inicializar el tablero, no se necesita boton, 
function inicializarTablero() {
    for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = { mina: false, revelada: false };
            // En todas las posiciones de la matriz se guarda  el mismo objeto con las propiedades: mina y revelada con valores: false.
        }
    }
    colocarMinas();
}

// Colocar minas aleatoriamente
function colocarMinas() {
    let count = 0;
    while (count < minas) {
        const fila = Math.floor(Math.random() * filas);
        const columna = Math.floor(Math.random() * columnas);
        if (!tablero[fila][columna].mina)
          // Lo que pregunta el if es: en la posicion aleatoria dada la propiedad mina es false o sea no hay mina, entonces coloque una mina con true
          
          {
            tablero[fila][columna].mina = true;
            count++;
        }
    }
}

// Dibujar el tablero en el DOM
function dibujarTablero() {
    const tabla = document.getElementById("tablero");
    tabla.innerHTML = ''; // Limpiar el tablero
    for (let i = 0; i < filas; i++) {
      // se crea un nuevo elemento <tr> y se carga en la const row
        const row = document.createElement('tr');
        
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');           
            celda.dataset.fila = i;
            celda.dataset.columna = j;
            celda.addEventListener('click', revelarCelda);
            row.appendChild(celda);
            

        }
        tabla.appendChild(row);
    }
}





// Revelar celda
function revelarCelda(event) {
    const fila = event.target.dataset.fila;
    const columna = event.target.dataset.columna;

    if (tablero[fila][columna].mina) {
        event.target.classList.add('mined');
        alert("¡Boom! Has perdido.");
        // Mostrar todas las minas
        tablero.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell.mina) {
                    const celda = document.querySelector(`td[data-fila='${i}'][data-columna='${j}']`);
                    celda.classList.add('mined');
                }
            });
        });
    } else {
        event.target.classList.add('revealed');
        tablero[fila][columna].revelada = true;
    }
}

// Inicializar y dibujar el tablero
inicializarTablero();
dibujarTablero();






// function dibujarTablero() {

//   Declara una función llamada dibujarTablero. Esta función se encargará de crear un tablero visualmente en la página web.
//   const tabla = document.getElementById("tablero");
  
//   Usa document.getElementById para obtener una referencia al elemento HTML con el ID "tablero". Este elemento es donde se construirá el tablero.
//   tabla.innerHTML = ''; // Limpiar el tablero
  
//   Establece el contenido HTML del elemento tabla a una cadena vacía. Esto limpia cualquier contenido anterior en el tablero, preparando el espacio para el nuevo tablero.
//   for (let i = 0; i < filas; i++) {
  
//   Inicia un bucle que se repetirá filas veces (una variable que debe estar definida previamente), donde i representa el índice de la fila actual.
//   const row = document.createElement('tr');
  
//   Crea un nuevo elemento de fila (<tr>) y lo asigna a la constante row. Este elemento representará una fila en el tablero.
//   for (let j = 0; j < columnas; j++) {
  
//   Inicia otro bucle que se repetirá columnas veces (otra variable que debe estar definida previamente), donde j representa el índice de la columna actual.
//   const celda = document.createElement('td');
  
//   Crea un nuevo elemento de celda (<td>) y lo asigna a la constante celda. Este elemento representará una celda dentro de la fila actual.
//   celda.dataset.fila = i;
  
//   Asigna el índice de la fila actual (i) al atributo data-fila de la celda. Esto permite que cada celda tenga un identificador único basado en su posición en el tablero.
//   celda.dataset.columna = j;
  
//   Asigna el índice de la columna actual (j) al atributo data-columna de la celda. Al igual que data-fila, esto permite identificar la posición de la celda en el tablero.
//   celda.addEventListener('click', revelarCelda);
  
//   Agrega un evento de clic a la celda que, cuando se activa, llamará a la función revelarCelda. Esto permite interactuar con la celda cuando el usuario hace clic en ella.
//   row.appendChild(celda);
  
//   Añade la celda (celda) a la fila (row). Esto construye la fila al agregarle cada celda en el bucle.
//   tabla.appendChild(row);
  
//   Finalmente, añade la fila completa (row) al tablero (tabla). Esto construye el tablero al agregarle cada fila en el bucle exterior.
//   Resumen
//   En resumen, esta función se encarga de crear un tablero de filas y columnas en un elemento HTML específico. Cada celda es interactiva y se limpia antes de volver a dibujar el tablero, lo que permite actualizarlo dinámicamente según sea necesario.