// Prototype interface
interface Copyable {
  clone(): Object;
}

// Concrete Prototype
class Project implements Copyable {
  constructor(
    public id: number,
    public name: string,
    public sourceCode: string
  ) {}

  setId(id: number) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setSourceCode(sourceCode: string) {
    this.sourceCode = sourceCode;
  }

  clone() {
    const copy = new Project(this.id, this.name, this.sourceCode);
    return copy;
  }
}

// usage
const project = new Project(1, 'Test', 'console.log("test")');

const projectClone = project.clone();
projectClone.setId(2);
projectClone.setSourceCode('console.log("updated test")');
