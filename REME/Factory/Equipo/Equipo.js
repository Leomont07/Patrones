const FabricaJugadores = require('../Fabricas/FabricaJugadores');
const FabricaAlineaciones = require('../Fabricas/FabricaAlineacion');

class Equipo {
    constructor(nombre){
        this._nombre = nombre;
        this._jugadores = []
    }

    get alineacion() {
        return this._alineacion
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    get jugadores() {
        return this._jugadores;
    }

    nuevoJugador(posicion, nombre) {
        const jugador = FabricaJugadores.crearJugador(posicion, nombre);
        if (jugador) {
            this._jugadores.push(jugador);
        } else {
            throw new Error('No se pudo crear el jugador');
        }
    }

    establecerAlineacion(estrategia, nombre) {
        const alineacion = FabricaAlineaciones.crearAlineacion(estrategia, nombre);
        if (alineacion) {
            this._alineacion = alineacion;
        } else {
            throw new Error('No se pudo asignar la alineacion');
        }
    }
}

module.exports = Equipo;