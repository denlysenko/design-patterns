class Level {
  static readonly ERROR = 1;
  static readonly DEBUG = 2;
  static readonly INFO = 3;
}

// Handler interface
interface Logger {
  writeMessage(msg: string, level: number): void;
}

// Base Handler
abstract class BaseLogger implements Logger {
  next: Logger = null;

  constructor(private priority: number) {}

  setNext(next: Logger) {
    this.next = next;
  }

  writeMessage(msg: string, level: number): void {
    if (level <= this.priority) {
      this.write(msg);
    }

    if (this.next !== null) {
      this.next.writeMessage(msg, level);
    }
  }

  abstract write(msg: string): void;
}

// Concrete Handler
class SmsLogger extends BaseLogger {
  constructor(priority: number) {
    super(priority);
  }

  write(msg: string): void {
    console.log(`Sending SMS: ${msg}`);
  }
}

// Concrete Handler
class FileLogger extends BaseLogger {
  constructor(priority: number) {
    super(priority);
  }

  write(msg: string): void {
    console.log(`Writing to file: ${msg}`);
  }
}

// Concrete Handler
class EmailLogger extends BaseLogger {
  constructor(priority: number) {
    super(priority);
  }

  write(msg: string): void {
    console.log(`Sending email: ${msg}`);
  }
}

// usage
const smsLogger = new SmsLogger(Level.ERROR);
const fileLogger = new FileLogger(Level.DEBUG);
const emailLogger = new EmailLogger(Level.INFO);

smsLogger.setNext(fileLogger);
fileLogger.setNext(emailLogger);

smsLogger.writeMessage('OK', Level.INFO);
smsLogger.writeMessage('Debugging', Level.DEBUG);
smsLogger.writeMessage('Error', Level.ERROR);
