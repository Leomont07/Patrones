const Jugador = require('./Jugador');

class Delantero extends Jugador {
    constructor(nombre) {
        super('Delantero', nombre);
    }

    get habilidades() {
        return ['Velocidad', 'Tiro', 'Salto'];
    }
}

module.exports = Delantero;