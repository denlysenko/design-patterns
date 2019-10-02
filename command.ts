// command
interface Command {
  execute(): void;
}

// concrete command
class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  execute() {
    console.log(this.payload);
  }
}

// concrete command
class ComplexCommand implements Command {
  private receiver: Receiver;
  private a: string;
  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  execute() {
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

// receiver
class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

// invoker
class Invoker {
  constructor(public onStart: Command, public onEnd: Command) {}

  doSomething() {
    this.onStart.execute();
    // ... doing something
    this.onEnd.execute();
  }
}
