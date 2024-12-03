const DocumentTemplate = require('./DocumentTemplate');

class Report extends DocumentTemplate {
  loadContent() {
    console.log('Cargando contenido del informe...');
  }

  processDocument() {
    console.log('Procesando el informe con formato profesional.');
  }
}

module.exports = Report;
