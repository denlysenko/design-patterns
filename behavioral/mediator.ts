// Component
interface User {
  sendMessage(message: string): void;
  getMessage(message: string): void;
}

// Mediator
interface Chat {
  sendMessage(message: string, user: User): void;
}

// Concrete component
class Admin implements User {
  constructor(public chat: Chat, public name: string) {}

  sendMessage(message: string) {
    this.chat.sendMessage(message, this);
  }

  getMessage(message: string) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Concrete component
class SimpleUser implements User {
  constructor(public chat: Chat, public name: string) {}

  sendMessage(message: string) {
    this.chat.sendMessage(message, this);
  }

  getMessage(message: string) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Concrete mediator
class TextChat implements Chat {
  admin: User;
  users: User[] = [];

  setAdmin(admin: User) {
    this.admin = admin;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  sendMessage(message: string, user: User) {
    for (let u of this.users) {
      if (u !== user) {
        u.getMessage(message);
      }
    }

    this.admin.getMessage(message);
  }
}

const chat = new TextChat();
const admin = new Admin(chat, 'Admin');
const user1 = new SimpleUser(chat, 'User1');
const user2 = new SimpleUser(chat, 'User2');

chat.setAdmin(admin);
chat.addUser(user1);
chat.addUser(user2);

user1.sendMessage('Hi from User1');
