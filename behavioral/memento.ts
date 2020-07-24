// Memento
class Snapshot {
  public get posY(): number {
    return this._posY;
  }

  public get posX(): number {
    return this._posX;
  }

  public get text(): string {
    return this._text;
  }

  constructor(
    private readonly _text: string,
    private readonly _posX: number,
    private readonly _posY: number
  ) {}
}

// Originator
class Editor {
  private text: string;
  private posX: number;
  private posY: number;

  public setText(text: string): void {
    this.text = text;
  }

  public setCursor(x: number, y: number): void {
    this.posX = x;
    this.posY = y;
  }

  public createSnapshot(): Snapshot {
    return new Snapshot(this.text, this.posX, this.posY);
  }

  public restore(snapshot: Snapshot): void {
    this.setText(snapshot.text);
    this.setCursor(snapshot.posX, snapshot.posY);
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}

// Caretaker
class HistoryStorage {
  private readonly history: Snapshot[] = [];

  public add(snapshot: Snapshot): void {
    this.history.push(snapshot);
  }

  public undo(): Snapshot {
    return this.history.pop();
  }
}

// usage
const storage = new HistoryStorage();
const editor = new Editor();

editor.setText('Hello');
editor.setCursor(120, 20);
console.log(editor);

storage.add(editor.createSnapshot());

editor.setText('Updated');
editor.setCursor(100, 50);
console.log(editor);

editor.restore(storage.undo());
console.log(editor);
