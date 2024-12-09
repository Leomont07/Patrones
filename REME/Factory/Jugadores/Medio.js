const Jugador = require('./Jugador');

class Medio extends Jugador {
    constructor(nombre) {
        super('Medio', nombre);
    }

    get habilidades() {
        return ['Pases', 'Visión de campo', 'Condición física'];
    }
}

module.exports = Medio;