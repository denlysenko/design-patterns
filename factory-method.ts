abstract class Creator {
  public abstract factoryMethod(): Product;
}

class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  operation() {
    return 'from concrete product 1';
  }
}

class ConcreteProduct2 implements Product {
  operation() {
    return 'from concrete product 2';
  }
}
