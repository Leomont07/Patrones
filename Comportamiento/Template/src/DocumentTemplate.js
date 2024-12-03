class DocumentTemplate {
    publish() {
      this.loadContent();
      this.processDocument();
      this.publishDocument();
      console.log('Publicación completada.\n');
    }
  
    loadContent() {
      throw new Error('El método loadContent() debe ser implementado.');
    }
  
    processDocument() {
      throw new Error('El método processDocument() debe ser implementado.');
    }
  
    publishDocument() {
      console.log('Publicando el documento...');
    }
  }
  
  module.exports = DocumentTemplate;
  