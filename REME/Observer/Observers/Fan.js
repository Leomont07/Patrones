class Fan {
    constructor(nombre) {
        this.nombre = nombre
    }

    avisado(datos) {
        if(datos.adelantamientos === 0) {
            console.log(`Fan: Mira ${datos.nombre} va a una velocidad de ${datos.velocidad}`)
        } else {
            console.log(`Fan: Mira ${datos.nombre} ha hecho ${datos.adelantamientos} adelantamientos y el utlimo fue a una velocidad de ${datos.velocidad}`)
        }
    }
}

module.exports = Fan;