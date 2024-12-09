const Equipo = require('./Equipo');

class RealMadrid extends Equipo {
    constructor(alineacion) {
        super('Real Madrid', alineacion);
    }

    get color() {
        return ['Blanco'];
    }
}

module.exports = RealMadrid;
