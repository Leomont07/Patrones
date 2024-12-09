const Ingeniero = require('./Observers/Ingeniero')
const Fan = require('./Observers/Fan')
const Comentarista = require('./Observers/Comentarista')

class F1 {
    constructor(nombre) {
        this.nombre = nombre;
        this.adelantamientos = 0;
        this.posicion = 10;
        this.velocidad = 150;
        this.llantas = 12;
        this.chismosos = []
    }

    agregarChismoso(tipo, nombre) {
        let chismoso;
        switch(tipo) {
            case 'Ingeniero': chismoso = new Ingeniero(nombre);
            break;
            case 'Fan': chismoso = new Fan(nombre);
            break;
            case 'Comentarista': chismoso = new Comentarista(nombre);
            break;
        }
        this.chismosos.push(chismoso);
    }

    avisar() {
        this.chismosos.forEach(chismoso => {
            chismoso.avisado(this)
        })
    }

    nuevosParametros(adelantamientos, posicion, velocidad, llantas) {
        this.adelantamientos = adelantamientos
        this.posicion = posicion
        this.velocidad = velocidad
        this.llantas = llantas
        this.avisar();
    }
}

module.exports = F1;