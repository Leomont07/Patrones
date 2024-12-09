const Jugador = require('./Jugador');

class Portero extends Jugador {
    constructor(nombre) {
        super('Portero', nombre);
    }

    get habilidades() {
        return ['Reflejos', 'Salto', 'Juego de pies'];
    }
}

module.exports = Portero;