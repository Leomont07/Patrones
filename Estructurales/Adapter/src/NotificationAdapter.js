const AdvancedMessagingService = require('./AdvancedMessagingService');

class NotificationAdapter {
  constructor() {
    this.messagingService = new AdvancedMessagingService();
  }

  sendSMS(phoneNumber, message) {
    this.messagingService.sendMessage({ type: 'sms', recipient: phoneNumber, message });
  }

  sendEmail(email, message) {
    this.messagingService.sendMessage({ type: 'email', recipient: email, message });
  }

  sendPushNotification(userId, message) {
    this.messagingService.sendMessage({ type: 'push', recipient: userId, message });
  }
}

module.exports = NotificationAdapter;
