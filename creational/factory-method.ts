// Creator
abstract class ButtonFactory {
  public abstract createButton(): Button;
}

// Concrete Creator
class WinButtonFactory extends ButtonFactory {
  createButton() {
    return new WinButton();
  }
}

// Concrete Creator
class MacOSButtonFactory extends ButtonFactory {
  createButton() {
    return new MacOSButton();
  }
}

// Product
interface Button {
  paint(): void;
}

// Concrete Product
class WinButton implements Button {
  paint() {
    console.log('windows button paints');
  }
}

// Concrete Product
class MacOSButton implements Button {
  paint() {
    console.log('MacOS button paints');
  }
}

class App {
  public button: Button;

  private buttonFactory: ButtonFactory;

  constructor(os: string) {
    if (os === 'macos') {
      this.buttonFactory = new MacOSButtonFactory();
    } else if (os === 'win') {
      this.buttonFactory = new WinButtonFactory();
    }

    this.button = this.buttonFactory.createButton();
  }
}

const app = new App('macos');
app.button.paint();
