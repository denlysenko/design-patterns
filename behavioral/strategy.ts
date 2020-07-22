function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Strategy
interface Sorting {
  sort(arr: number[]): void;
}

// Concrete strategy
class BubbleSort implements Sorting {
  sort(arr: number[]) {
    console.log('Bubble sort');
    console.log(`Before sorting: ${JSON.stringify(arr)}`);

    let noSwaps: boolean;

    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;

      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwaps = false;
        }
      }

      if (noSwaps) {
        break;
      }
    }

    console.log(`After sorting: ${JSON.stringify(arr)}`);
  }
}

// Concrete strategy
class SelectionSort implements Sorting {
  sort(arr: number[]) {
    console.log('Selection sort');
    console.log(`Before sorting: ${JSON.stringify(arr)}`);

    const len = arr.length;

    for (let i = 0; i < len; i++) {
      let min = i;

      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }

      if (min !== i) {
        swap(arr, i, min);
      }
    }

    console.log(`After sorting: ${JSON.stringify(arr)}`);
  }
}

// Concrete strategy
class InsertionSort implements Sorting {
  sort(arr: number[]) {
    console.log('Insertion sort');
    console.log(`Before sorting: ${JSON.stringify(arr)}`);

    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;

      while (j >= 0 && arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j--);
      }
    }

    console.log(`After sorting: ${JSON.stringify(arr)}`);
  }
}

// Context
class SortingClient {
  constructor(private sorting: Sorting) {}

  setSorting(sorting: Sorting) {
    this.sorting = sorting;
  }

  executeSorting(arr: number[]) {
    this.sorting.sort(arr);
  }
}

// usage
const sortingClient = new SortingClient(new BubbleSort());
sortingClient.executeSorting([3, 1, 8, 2, 4, 5]);

sortingClient.setSorting(new SelectionSort());
sortingClient.executeSorting([5, 2, 7, 3, 4, 8]);

sortingClient.setSorting(new InsertionSort());
sortingClient.executeSorting([8, 2, 4, 5, 6, 3, 1, 2]);
