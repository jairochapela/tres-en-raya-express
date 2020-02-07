var express = require('express');
var router = express.Router();

const tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

/* Pantalla principal del juego. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tres en raya', tablero });
});

router.post('/ponerficha', function(req, res, next) {
  const {fila, columna} = req.body;
  tablero[fila][columna] = 1;
  res.render('index', { title: 'Tres en raya', tablero });
});

module.exports = router;
