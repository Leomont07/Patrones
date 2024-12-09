const Jugador = require('./Jugador');

class Defensa extends Jugador {
    constructor(nombre) {
        super('Defensa', nombre);
    }

    get habilidades() {
        return ['Fuerza', 'Entrada', 'Guapo'];
    }
}

module.exports = Defensa;