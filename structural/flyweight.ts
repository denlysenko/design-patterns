// flyweight
interface Shape {
  draw(x: number, y: number): void;
}

// Point flyweight
class Point implements Shape {
  public draw(x: number, y: number) {
    console.log(`drawing point x: ${x}, y: ${y}`);
  }
}

// Circle flyweight
class Circle implements Shape {
  public r = 5;

  public draw(x: number, y: number) {
    console.log(`drawing circle with radius: ${this.r}, x: ${x}, y: ${y}`);
  }
}

// Square flyweight
class Square implements Shape {
  public a = 10;

  public draw(x: number, y: number) {
    console.log(`drawing square with side: ${this.a}, x: ${x}, y: ${y}`);
  }
}

// flyweight factory
class ShapeFactory {
  private shapes = new Map<string, Shape>();

  getShape(type: string): Shape {
    if (!this.shapes.has(type)) {
      let shape = null;

      switch (type) {
        case 'circle':
          console.log('creating circle');
          shape = new Circle();
          this.shapes.set('circle', shape);
          break;
        case 'point':
          console.log('creating point');
          shape = new Point();
          this.shapes.set('point', shape);
          break;
        case 'square':
          console.log('creating square');
          shape = new Square();
          this.shapes.set('square', shape);
          break;
      }

      return shape;
    }

    return this.shapes.get(type);
  }
}

// usage
const shapeFactory = new ShapeFactory();
const shapes = [
  shapeFactory.getShape('circle'),
  shapeFactory.getShape('circle'),
  shapeFactory.getShape('circle'),
  shapeFactory.getShape('circle'),
  shapeFactory.getShape('point'),
  shapeFactory.getShape('point'),
  shapeFactory.getShape('point'),
  shapeFactory.getShape('square'),
  shapeFactory.getShape('square'),
  shapeFactory.getShape('square'),
];

for (let shape of shapes) {
  const x = Math.ceil(Math.random() * 10);
  const y = Math.ceil(Math.random() * 10);
  shape.draw(x, y);
}
