enum Transmission {
  MANUAL,
  AUTO
}

class Car {
  public seats = 4;
  public transmission = Transmission.MANUAL;
  public maxSpeed = 220;
  public hasParkingAssistant = false;
  public hasGPS = false;
}

// Simple builder
class CarBuilder {
  public car: Car;

  constructor() {
    this.car = new Car();
  }

  setTransmission(transmission: Transmission): CarBuilder {
    this.car.transmission = transmission;
    return this;
  }

  setMaxSpeed(maxSpeed: number): CarBuilder {
    this.car.maxSpeed = maxSpeed;
    return this;
  }

  setParkingAssistant(hasParkingAssistant: boolean): CarBuilder {
    this.car.hasParkingAssistant = hasParkingAssistant;
    return this;
  }

  setGPS(hasGPS: boolean): CarBuilder {
    this.car.hasGPS = hasGPS;
    return this;
  }

  build(): Car {
    return this.car;
  }
}

const carBuilder = new CarBuilder();
const car = carBuilder
  .setTransmission(Transmission.AUTO)
  .setMaxSpeed(280)
  .setParkingAssistant(false)
  .build();

// Complex builder

// Builder interface/abstract class
abstract class CarBuilder2 {
  protected car: Car;

  createCar() {
    this.car = new Car();
  }

  abstract setTransmission(): void;
  abstract setMaxSpeed(): void;
  abstract setParkingAssistant(): void;
  abstract setGPS(): void;

  getCar(): Car {
    return this.car;
  }
}

// Concrete builder
class VWBuilder extends CarBuilder2 {
  setTransmission() {
    this.car.transmission = Transmission.MANUAL;
  }

  setMaxSpeed() {
    this.car.maxSpeed = 280;
  }

  setParkingAssistant() {
    this.car.hasParkingAssistant = false;
  }

  setGPS() {
    this.car.hasGPS = true;
  }
}

// Concrete builder
class AudiBuilder extends CarBuilder2 {
  setTransmission() {
    this.car.transmission = Transmission.AUTO;
  }

  setMaxSpeed() {
    this.car.maxSpeed = 320;
  }

  setParkingAssistant() {
    this.car.hasParkingAssistant = true;
  }

  setGPS() {
    this.car.hasGPS = true;
  }
}

// Director
class Director {
  private builder: CarBuilder2;

  setBuilder(builder: CarBuilder2) {
    this.builder = builder;
  }

  buildCar(): Car {
    this.builder.createCar();
    this.builder.setTransmission();
    this.builder.setMaxSpeed();
    this.builder.setParkingAssistant();
    this.builder.setGPS();

    return this.builder.getCar();
  }
}

const director = new Director();
director.setBuilder(new AudiBuilder());
const car2 = director.buildCar();
