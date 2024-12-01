class Config {
    constructor() {
      if (Config.instance) {
        return Config.instance; // Devuelve la instancia existente si ya existe
      }
  
      // Propiedades de configuración iniciales
      this.databaseHost = 'localhost';
      this.databasePort = 3306;
      this.databaseName = 'my_database';
      
      // Asigna la instancia
      Config.instance = this;
    }
  
    // Métodos para acceder y modificar la configuración
    getDatabaseConfig() {
      return {
        host: this.databaseHost,
        port: this.databasePort,
        name: this.databaseName,
      };
    }
  
    setDatabaseConfig(host, port, name) {
      this.databaseHost = host;
      this.databasePort = port;
      this.databaseName = name;
    }
  }
  
  module.exports = Config;
  