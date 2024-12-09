const Alineacion = require('./Alineacion');

class Atacar extends Alineacion {
    constructor(nombre) {
        super('Atacar', nombre);
    }

    get formacion() {
        return `\n1 - Portero\n4 - Defensas\n3 - Medios\n3 - Delanteros`;
    }
}

module.exports = Atacar;