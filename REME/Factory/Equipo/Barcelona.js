const Equipo = require('./Equipo');

class Barcelona extends Equipo {
    constructor() {
        super('FC Barcelona');
    }

    get color() {
        return ['Azul y Rojo'];
    }
}

module.exports = Barcelona;
