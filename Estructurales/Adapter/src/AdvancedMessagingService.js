class AdvancedMessagingService {
    sendMessage({ type, recipient, message }) {
      switch (type) {
        case 'sms':
          console.log(`SMS enviado a ${recipient}: "${message}"`);
          break;
        case 'email':
          console.log(`Email enviado a ${recipient}: "${message}"`);
          break;
        case 'push':
          console.log(`Notificación push enviada a ${recipient}: "${message}"`);
          break;
        default:
          console.log('Tipo de mensaje no soportado.');
      }
    }
  }
  
  module.exports = AdvancedMessagingService;
  