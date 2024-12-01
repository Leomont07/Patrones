const Config = require('./Config');

// Intentamos crear varias instancias de Config
const config1 = new Config();
const config2 = new Config();

// Mostramos que ambas instancias son la misma
console.log('Config 1:', config1.getDatabaseConfig());
console.log('Config 2:', config2.getDatabaseConfig());

// Modificamos la configuración a través de la primera instancia
config1.setDatabaseConfig('remote_host', 5432, 'new_database');

// Mostramos que la modificación afecta a ambas instancias
console.log('Config 1 (después de modificar):', config1.getDatabaseConfig());
console.log('Config 2 (después de modificar):', config2.getDatabaseConfig());
