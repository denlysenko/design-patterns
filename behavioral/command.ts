// Command
interface Command {
  execute(): void;
}

// Concrete command
class StartCommand implements Command {
  constructor(private readonly computer: Computer) {}

  execute() {
    this.computer.start();
  }
}

// Concrete command
class StopCommand implements Command {
  constructor(private readonly computer: Computer) {}

  execute() {
    this.computer.stop();
  }
}

// Concrete command
class ReloadCommand implements Command {
  constructor(private readonly computer: Computer) {}

  execute() {
    this.computer.reload();
  }
}

// Receiver
class Computer {
  public start(): void {
    console.log('Starting computer...');
  }

  public stop(): void {
    console.log('Stopping computer...');
  }
  public reload(): void {
    console.log('Reloading computer...');
  }
}

// Invoker
class User {
  constructor(
    public start: Command,
    public stop: Command,
    public reload: Command
  ) {}

  startComputer() {
    this.start.execute();
  }

  stopComputer() {
    this.stop.execute();
  }

  reloadComputer() {
    this.reload.execute();
  }
}

// usage
const computer = new Computer();

const user = new User(
  new StartCommand(computer),
  new StopCommand(computer),
  new ReloadCommand(computer)
);

user.startComputer();
user.reloadComputer();
user.stopComputer();
