class Jugador {
    constructor(posicion, nombre){
        this._posicion = posicion;
        this._nombre = nombre;
    }

    set posicion(posicion) {
        this._posicion = posicion;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get posicion() {
        return this._posicion;
    }

    get nombre() {
        return this._nombre;
    }

}

module.exports = Jugador;