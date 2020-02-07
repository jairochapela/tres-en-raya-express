var express = require('express');
var router = express.Router();

/* Pantalla principal del juego. */
router.get('/', function(req, res, next) {
  const tablero = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 2]
  ];
  res.render('index', { title: 'Tres en raya', tablero });
});

module.exports = router;
