const OldNotificationSystem = require('./OldNotificationSystem');
const NotificationAdapter = require('./NotificationAdapter');

const useAdvancedSystem = true; // Cambia a false para usar el sistema antiguo.

let notificationSystem;

if (useAdvancedSystem) {
  notificationSystem = new NotificationAdapter();
} else {
  notificationSystem = new OldNotificationSystem();
}

// Enviar diferentes tipos de notificaciones
notificationSystem.sendSMS('+123456789', 'Este es un SMS de prueba.');
if (useAdvancedSystem) {
  notificationSystem.sendEmail('user@example.com', 'Este es un email de prueba.');
  notificationSystem.sendPushNotification('user_123', 'Este es un push notification.');
}
