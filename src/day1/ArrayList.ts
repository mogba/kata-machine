// This is basically a standard JS array
export default class ArrayList<T> {
  /**
   * Indicates the first empty index in the array list and can be
   * different from the array list's capacity.
   */
  public length: number;

  /**
   * Stores the elements of the array list. `values.length` will give off
   * the array list's capacity, which may be different from `this.length`.
   */
  private values: T[];
  private capacityOffset: number = 10;

  private getCapacity() {
    return this.values.length;
  }

  constructor(initialCapacity: number = 0) {
    this.length = 0;
    this.values = new Array(initialCapacity || this.capacityOffset);
  }

  private checkCapacityAndResizeArray(idx: number) {
    if (idx > this.getCapacity()) {
      const newValues = new Array(idx + this.capacityOffset);

      for (let i = 0; i < this.length; i++) {
        newValues[i] = this.values[i];
      }

      this.values = newValues;
    }
  }

  prepend(item: T): void {
    const idx = 0;

    this.checkCapacityAndResizeArray(idx);

    // Move every element to the next index, from last to first element
    for (let i = this.length - 1; i >= 0; i--) {
      this.values[i + 1] = this.values[i];
    }

    this.values[idx] = item;

    this.length++;
  }

  insertAt(item: T, idx: number): void {
    this.checkCapacityAndResizeArray(idx);

    this.values[idx] = item;
  }

  append(item: T): void {
    this.checkCapacityAndResizeArray(this.length);

    this.values[this.length] = item;

    this.length++;
  }

  remove(item: T): T | undefined {
    let indexToRemove = -1;

    for (let i = 0; i < this.length && indexToRemove === -1; i++) {
      if (this.values[i] === item) {
        indexToRemove = i;
      }
    }

    if (indexToRemove === -1) {
      return undefined;
    }

    this.moveElementsToPreviousIndex(indexToRemove);

    this.length--;

    return item;
  }

  get(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined;
    }

    return this.values[idx];
  }

  private moveElementsToPreviousIndex(startingIdx: number) {
    // If `this.length` is 10, the last index is 9,
    // therefore `this.values[i + 1]` is undefined,
    // which means the last item will be correctly cleaned.
    for (let i = startingIdx; i < this.length; i++) {
      this.values[i] = this.values[i + 1];
    }
  }

  removeAt(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined;
    }

    const itemToRemove = this.values[idx];

    this.moveElementsToPreviousIndex(idx);

    this.length--;

    return itemToRemove;
  }
}
