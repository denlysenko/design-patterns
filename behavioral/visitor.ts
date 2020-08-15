// Element interface
interface Shape {
  move(x: number, y: number): void;
  draw(): void;
  accept(visitor: Visitor): void;
}

// Concrete Element
class Dot implements Shape {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  move(x: number, y: number): void {
    console.log(`Moving a dot to x: ${x}, y: ${y}`);
  }

  draw(): void {
    console.log('Drawing a dot');
  }

  accept(visitor: Visitor): void {
    visitor.visitDot(this);
  }
}

// Concrete Element
class Circle implements Shape {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  move(x: number, y: number): void {
    console.log(`Moving a circle to x: ${x}, y: ${y}`);
  }

  draw(): void {
    console.log('Drawing a circle');
  }

  accept(visitor: Visitor): void {
    visitor.visitCircle(this);
  }
}

// Concrete Element
class Rect implements Shape {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  move(x: number, y: number): void {
    console.log(`Moving a rect to x: ${x}, y: ${y}`);
  }

  draw(): void {
    console.log('Drawing a rect');
  }

  accept(visitor: Visitor): void {
    visitor.visitRect(this);
  }
}

// Visitor interface
interface Visitor {
  visitDot(dot: Dot): void;
  visitCircle(circle: Circle): void;
  visitRect(rect: Rect): void;
}

// Concrete Visitor
class XMLExportVisitor implements Visitor {
  visitDot(dot: Dot): void {
    console.log(`Exporting ${dot.name} to XML`);
  }

  visitCircle(circle: Circle): void {
    console.log(`Exporting ${circle.name} to XML`);
  }

  visitRect(rect: Rect): void {
    console.log(`Exporting ${rect.name} to XML`);
  }
}

// usage

function exportShapes(shapes: Shape[]): void {
  const exportVisitor = new XMLExportVisitor();

  for (let shape of shapes) {
    shape.accept(exportVisitor);
  }
}

exportShapes([new Dot('dot'), new Circle('circle'), new Rect('rect')]);
