class Computer {
  public getElectricShock() {
    console.log('Ouch!');
  }

  public makeSound() {
    console.log('Beep beep!');
  }

  public showLoadingScreen() {
    console.log('Loading..');
  }

  public bam() {
    console.log('Ready to be used!');
  }

  public closeEverything() {
    console.log('Bup bup bup buzzzz!');
  }

  public sooth() {
    console.log('Zzzzz');
  }

  public pullCurrent() {
    console.log('Haaah!');
  }
}

class ComputerFacade {
  constructor(private computer: Computer) {}

  public turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  public turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

// usage
const comp = new ComputerFacade(new Computer());

comp.turnOn();
comp.turnOff();
