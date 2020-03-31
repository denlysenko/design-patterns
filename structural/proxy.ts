interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private url: string) {
    this.load();
  }

  load() {
    console.log(`loading ${this.url}...`);
  }

  display() {
    console.log(`displaying ${this.url}...`);
  }
}

class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private url: string) {}

  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.url);
    }

    this.realImage.display();
  }
}

const image = new ProxyImage('image.png');
image.display();
