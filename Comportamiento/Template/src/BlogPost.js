const DocumentTemplate = require('./DocumentTemplate');

class BlogPost extends DocumentTemplate {
  loadContent() {
    console.log('Cargando contenido del blog...');
  }

  processDocument() {
    console.log('Procesando el blog con estilo informal.');
  }

  publishDocument() {
    console.log('Publicando el artículo del blog en la web...');
  }
}

module.exports = BlogPost;
