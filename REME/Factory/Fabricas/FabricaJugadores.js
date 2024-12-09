const Delantero = require('../Jugadores/Delantero.js');
const Defensa = require('../Jugadores/Defensa.js');
const Medio = require('../Jugadores/Medio.js');
const Portero = require('../Jugadores/Portero');

class  FabricaJugadores {
    static crearJugador(posicion, nombre) {
        switch (posicion) {
            case 'Delantero': return new Delantero(nombre);
            case 'Defensa': return new Defensa(nombre);
            case 'Medio': return new Medio(nombre);
            case 'Portero': return new Portero(nombre);
        }
    }
}

module.exports = FabricaJugadores;