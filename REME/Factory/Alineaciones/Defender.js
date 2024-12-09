const Alineacion = require('./Alineacion');

class Defender extends Alineacion {
    constructor(nombre) {
        super('Defender', nombre);
    }

    get formacion() {
        return `\n1 - Portero\n5 - Defensas\n4 - Medios\n1 - Delanteros`;
    }
}

module.exports = Defender;