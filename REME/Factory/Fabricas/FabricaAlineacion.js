const Atacar = require('../Alineaciones/Atacar.js');
const Defender = require('../Alineaciones/Defender.js');    
const Retener = require('../Alineaciones/Retener.js');

class  FabricaAlineaciones {
    static crearAlineacion(estrategia, nombre) {
        switch (estrategia) {
            case 'Atacar': return new Atacar(nombre);
            case 'Defender': return new Defender(nombre);
            case 'Retener': return new Retener(nombre);
        }
    }
}

module.exports = FabricaAlineaciones;