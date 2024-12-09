const FabricaEquipos = require('./Fabricas/FabricaEquipos');

const equipo = FabricaEquipos.crearEquipo('RealMadrid');
equipo.establecerAlineacion('Atacar', 'LaMeteGoles');
equipo.nuevoJugador('Delantero', 'Karim Benzema');
equipo.nuevoJugador('Delantero', 'Cristiano Ronaldo');
equipo.nuevoJugador('Delantero', 'Gareth Bale');
equipo.nuevoJugador('Medio', 'Luka Modric');
equipo.nuevoJugador('Medio', 'Toni Kroos');
equipo.nuevoJugador('Medio', 'James Rodríguez');
equipo.nuevoJugador('Defensa', 'Sergio Ramos');
equipo.nuevoJugador('Defensa', 'Pepe');
equipo.nuevoJugador('Defensa', 'Marcelo');
equipo.nuevoJugador('Defensa', 'Carvajal');
equipo.nuevoJugador('Portero', 'Keylor Navas');

console.log(`El equipo ${equipo.nombre} saldrá a jugar de color ${equipo.color}`);
console.log(`Jugarán con una estrategia de ${equipo.alineacion.estrategia} llamda ${equipo.alineacion.nombre} y una formación de ${equipo.alineacion.formacion}`);
console.log('Sus jugadores son:');

equipo.jugadores.forEach((jugador) => {
    console.log(`- ${jugador.nombre} es ${jugador.posicion} y sus habilidades son: ${jugador.habilidades.join(', ')}`);
});
