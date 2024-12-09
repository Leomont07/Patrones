const Alineacion = require('./Alineacion');

class Retener extends Alineacion {
    constructor(nombre) {
        super('Retener', nombre);
    }

    get formacion() {
        return `\n1 - Portero\n4 - Defensa\n4 - Medio\n2 - Delantero`;
    }
}

module.exports = Retener;