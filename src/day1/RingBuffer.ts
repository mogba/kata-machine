export default class RingBuffer<T> {
  public length: number;

  private buffer: (T | undefined)[];

  constructor(capacity: number) {
    this.buffer = new Array(capacity);
    this.length = 0;
  }

  public get(i: number) {
    if (i <= -1 || i < this.length - this.buffer.length || i >= this.length) {
      return undefined;
    }

    return this.buffer[i % this.buffer.length];
  }

  public push(v: T) {
    this.buffer[this.length % this.buffer.length] = v;
    this.length++;
  }

  public pop() {
    if (this.length === 0) {
      return undefined;
    }

    this.length--;

    const v = this.buffer[this.length % this.buffer.length];

    this.buffer[this.length % this.buffer.length] = undefined;

    return v;
  }
}
