const F1 = require('./F1')

const monoplaza = new F1('Checo Pérez');

monoplaza.agregarChismoso('Ingeniero', 'Bird');
monoplaza.agregarChismoso('Fan', 'Leonardo');
monoplaza.agregarChismoso('Comentarista', 'Juan Fosarolli');

monoplaza.nuevosParametros(0, 10, 180, 2);
monoplaza.nuevosParametros(3, 7, 240, 9);
monoplaza.nuevosParametros(7, 3, 270, 16);
monoplaza.nuevosParametros(9, 1, 325, 28);

