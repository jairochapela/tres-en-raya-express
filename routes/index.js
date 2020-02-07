var express = require('express');
var router = express.Router();

const tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

var jugadores = 0;

/* Pantalla principal del juego. */
router.get('/', function(req, res, next) {
  const session = req.session;
  if (!session.jugador) {
    jugadores++;
    session.jugador = jugadores;
  }
  res.render('index', { title: 'Tres en raya', tablero });
});

router.post('/ponerficha', function(req, res, next) {
  const {fila, columna} = req.body;
  const jugador = req.session.jugador;
  tablero[fila][columna] = jugador;
  res.render('index', { title: 'Tres en raya', tablero });
});

module.exports = router;
