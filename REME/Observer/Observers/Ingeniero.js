class Ingeniero {
    constructor(nombre) {
        this.nombre = nombre
    }

    avisado(datos){
        console.log(`Ingeniero: ${datos.nombre} te habla ${this.nombre}. Vas en la posicion ${datos.posicion} y llevas ${datos.llantas} vueltas con ese neumático`)
    }
}

module.exports = Ingeniero;