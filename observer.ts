interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteSubject implements Subject {
  public state: number;

  private observers: Observer[] = [];

  public attach(observer: Observer) {
    this.observers.push(observer);
  }

  public detach(observer: Observer) {
    const index = this.observers.indexOf(observer);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify() {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }
}

class ConcreteObserver implements Observer {
  update(subject: ConcreteSubject) {
    console.log(subject.state);
  }
}
