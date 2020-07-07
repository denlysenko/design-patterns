// Iterator
interface IIterator<T> {
  next(): T;
  hasNext(): boolean;
}

// Aggregator
interface IterableCollection {
  getIterator(): IIterator<string>;
}

// Concrete iterator
class AlphabeticalOrderIterator implements IIterator<string> {
  private index = 0;

  constructor(private collection: WordsCollection) {}

  next() {
    return this.collection.getItems()[this.index++];
  }

  hasNext() {
    return this.collection.getCount() > this.index;
  }
}

// Concrete aggregator
class WordsCollection implements IterableCollection {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }

  getCount(): number {
    return this.items.length;
  }

  getIterator(): IIterator<string> {
    return new AlphabeticalOrderIterator(this);
  }
}

// usage
const collection = new WordsCollection();

collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
