// Product
interface Button {
  paint(): void;
}

// Concrete Product
class WinButton implements Button {
  paint() {
    console.log('Windows button paints');
  }
}

// Concrete Product
class MacOSButton implements Button {
  paint() {
    console.log('MacOS button paints');
  }
}

// Product
interface Checkbox {
  paint(): void;
}

// Concrete Product
class WinCheckbox implements Checkbox {
  paint() {
    console.log('Windows checkbox paints');
  }
}

// Concrete Product
class MacOSCheckbox implements Checkbox {
  paint() {
    console.log('MacOS checkbox paints');
  }
}

// Abstract Factory
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factory
class WinFactory implements GUIFactory {
  createButton() {
    return new WinButton();
  }

  createCheckbox() {
    return new WinCheckbox();
  }
}

// Concrete Factory
class MacOSFactory implements GUIFactory {
  createButton() {
    return new MacOSButton();
  }

  createCheckbox() {
    return new MacOSCheckbox();
  }
}

class App {
  public button: Button;
  public checkbox: Checkbox;

  private guiFactory: GUIFactory;

  constructor(os: string) {
    if (os === 'win') {
      this.guiFactory = new WinFactory();
    } else if (os === 'macos') {
      this.guiFactory = new MacOSFactory();
    }

    this.button = this.guiFactory.createButton();
    this.checkbox = this.guiFactory.createCheckbox();
  }
}

const app = new App('macos');
app.button.paint();
app.checkbox.paint();
