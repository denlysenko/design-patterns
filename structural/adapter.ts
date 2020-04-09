interface VectorGraphicsInterface {
  drawLine(): void;
  drawSquare(): void;
}

class RasterGraphics {
  public drawRasterLine() {
    console.log('Drawing line...');
  }

  public drawRasterSquare() {
    console.log('Drawing square...');
  }
}

// using inheritance
class VectorToRasterAdapter extends RasterGraphics
  implements VectorGraphicsInterface {
  public drawLine() {
    super.drawRasterLine();
  }

  public drawSquare() {
    super.drawRasterSquare();
  }
}

// using composition
class VectorToRasterAdapter2 implements VectorGraphicsInterface {
  constructor(private readonly raster: RasterGraphics) {}

  public drawLine() {
    this.raster.drawRasterLine();
  }

  public drawSquare() {
    this.raster.drawRasterSquare();
  }
}

// usage
const graphics1 = new VectorToRasterAdapter();
graphics1.drawLine();
graphics1.drawSquare();

const graphics2 = new VectorToRasterAdapter2(new RasterGraphics());
graphics2.drawLine();
graphics2.drawSquare();
