class Alineacion {
    constructor(estrategia, nombre){
        this._estrategia = estrategia;
        this._nombre = nombre;
    }

    set estrategia(estrategia) {
        this._estrategia = estrategia;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get estrategia() {
        return this._estrategia;
    }

    get nombre() {
        return this._nombre;
    }

}

module.exports = Alineacion;