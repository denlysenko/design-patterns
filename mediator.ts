interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      this.component2.doC();
    }

    if (event === 'D') {
      this.component1.doB();
      this.component2.doC();
    }
  }
}

class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class Component1 extends BaseComponent {
  public doA(): void {
    this.mediator.notify(this, 'A');
  }

  public doB(): void {
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  public doC(): void {
    this.mediator.notify(this, 'C');
  }

  public doD(): void {
    this.mediator.notify(this, 'D');
  }
}
