// Component
interface Developer {
  writeCode(): void;
}

// Leaf(Node)
class FrontendDeveloper implements Developer {
  public writeCode() {
    console.log('Frontend developer writes code...');
  }
}

// Leaf(Node)
class BackendDeveloper implements Developer {
  public writeCode() {
    console.log('Backend developer writes code...');
  }
}

// Composite
class Team implements Developer {
  private components: Developer[] = [];

  public addComponent(component: Developer) {
    this.components.push(component);
  }

  public writeCode() {
    this.components.forEach((component) => {
      component.writeCode();
    });
  }
}

// Usage
const frontend1 = new FrontendDeveloper();
const backend1 = new BackendDeveloper();
const backend2 = new BackendDeveloper();

const frontend2 = new FrontendDeveloper();
const backend3 = new BackendDeveloper();

const team1 = new Team();
team1.addComponent(frontend1);
team1.addComponent(backend1);
team1.addComponent(backend2);

const team2 = new Team();
team2.addComponent(frontend2);
team2.addComponent(backend3);
team2.addComponent(team1);

team2.writeCode();
