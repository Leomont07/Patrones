class Comentarista {
    constructor(nombre) {
        this.nombre = nombre
    }

    avisado(datos) {
            console.log(`Comentarista: Soy ${this.nombre} analista de F1, vamos a analizar los datos de la carrera de ${datos.nombre}:\n- Ha hecho ${datos.adelantamientos} adelantamientos\n- Se ubica en la posicion${datos.posicion}\n- Va a una velocidad de ${datos.velocidad}\n- Tiene un desgaste de ${datos.llantas} vueltas con esos neumáticos`)
    }
}

module.exports = Comentarista;