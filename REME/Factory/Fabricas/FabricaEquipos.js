const Barcelona = require('../Equipo/Barcelona');
const RealMadrid = require('../Equipo/RealMadrid');

class FabricaEquipos {
    static crearEquipo(nombre) {
        switch (nombre) {
            case 'Barcelona': return new Barcelona();
            case 'RealMadrid': return new RealMadrid();
        }
    }
}

module.exports = FabricaEquipos;
