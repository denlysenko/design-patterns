// Interface Component
interface IPrinter {
  print(): void;
}

// Concrete Component
class Printer implements IPrinter {
  constructor(public str: string) {}

  print() {
    console.log(this.str);
  }
}

// Base Decorator
abstract class Decorator implements IPrinter {
  constructor(public component: IPrinter) {}

  print() {
    this.component.print();
  }
}

// Concrete Decorator
class QuotesDecorator extends Decorator {
  constructor(component: IPrinter) {
    super(component);
  }
  print() {
    console.log('"');
    super.print();
    console.log('"');
  }
}

// Concrete Decorator
class LeftBracketDecorator extends Decorator {
  constructor(component: IPrinter) {
    super(component);
  }

  print() {
    console.log('[');
    super.print();
  }
}

// Concrete Decorator
class RightBracketDecorator extends Decorator {
  constructor(component: IPrinter) {
    super(component);
  }

  print() {
    super.print();
    console.log(']');
  }
}

// Usage
const printer = new RightBracketDecorator(
  new LeftBracketDecorator(new QuotesDecorator(new Printer('Hello')))
);
printer.print();
