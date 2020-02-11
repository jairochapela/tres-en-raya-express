/**
 * Esta función comprueba si en el tablero hay un
 * jugador ganador.
 * 
 * Devuelve 1 ó 2 si ha ganado el jugador 1 o el 2,
 * respectivamente; 0 si no hay ganador.
 * 
 * @param {*} tablero 
 */
function comprobarGanador(tablero) {
    // comprobación de filas
    for (let fila = 0; fila < tablero.length; fila++) {
        if (tablero[fila][0]!=0 && tablero[fila][0]==tablero[fila][1] && tablero[fila][1]==tablero[fila][2]) {
            return tablero[fila][0];
        }
    }
    // comprobación de columnas
    for (let columna = 0; columna < tablero.length; columna++) {
        if (tablero[0][columna]!=0 && tablero[0][columna]==tablero[1][columna] && tablero[1][columna]==tablero[2][columna]) {
            return tablero[0][columna];
        }
    }
    // comprobación de diagonales
    if (tablero[0][0]!=0 && tablero[0][0]==tablero[1][1] && tablero[1][1]==tablero[2][2]) {
        return tablero[0][0];
    }

    if (tablero[2][0]!=0 && tablero[2][0]==tablero[1][1] && tablero[1][1]==tablero[0][2]) {
        return tablero[2][0];
    }

    return 0;
}


module.exports = {
    comprobarGanador
}