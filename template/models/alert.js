// alert.js
class Alert {
  constructor(id, message, type, timestamp) {
    this.id = id;
    this.message = message;
    this.type = type;
    this.timestamp = timestamp;
  }
}

module.exports = Alert;