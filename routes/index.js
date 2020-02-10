var express = require('express');
var router = express.Router();

const tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

var jugadores = 0;
var turno = 1;

/* Pantalla principal del juego. */
router.get('/', function(req, res, next) {
  const session = req.session;
  if (!session.jugador) {
    jugadores++;
    if (jugadores > 2) {
      res.status(403);
    }
    session.jugador = jugadores;
  }
  const meToca = (turno == session.jugador);
  res.render('index', { title: 'Tres en raya', tablero, meToca });
});

router.post('/ponerficha', function(req, res, next) {
  const {fila, columna} = req.body;
  const jugador = req.session.jugador;
  tablero[fila][columna] = jugador;

  // Alternamos el turno
  if (turno == 1) {
    turno = 2;
  } else {
    turno = 1;
  }

  res.redirect("/");
});


router.get("/miturno", function(req, res, next) {
  const meToca = (turno == req.session.jugador);
  if (meToca) {
    res.status(200).json(true); //ok
  } else {
    res.status(400).json(false); //fallo (si no me toca)
  }
})

module.exports = router;
