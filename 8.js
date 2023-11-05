class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  sendMessage(message) {
    this.mediator.sendMessage(this, message);
  }

  receiveMessage(user, message) {
    console.log(
      `${this.name} отримав повідомлення від ${user.name}: ${message}`
    );
  }
}

class SMSMessenger {
  static sendMessage(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

class EmailMessenger {
  static sendMessage(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

class Mediator {
  sendMessage(user, message) {
    if (user.mediator === SMSMessenger) {
      SMSMessenger.sendMessage(`[${user.name}]: ${message}`);
    } else if (user.mediator === EmailMessenger) {
      EmailMessenger.sendMessage(`[${user.name}]: ${message}`);
    }

    users.forEach((otherUser) => {
      if (otherUser !== user) {
        otherUser.receiveMessage(user, message);
      }
    });
  }
}

console.log("Завдання 7 ====================================");

const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

const mediator = new Mediator();
const users = [john, jane];

john.sendMessage("Привіт!");

jane.sendMessage("Привіт!");

