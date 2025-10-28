class Node<T> {
  item: T
  previous: Node<T> | null
  next: Node<T> | null
}

export default class DoublyLinkedList<T> {
  public length: number = 0;
  
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(item: T): void {
    this.length++;

    const newNode = { item } as Node<T>;

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }

  append(item: T): void {
    this.length++;

    const newNode = { item } as Node<T>;

    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length || idx < 0) {
      throw new Error("Out of bounds");
    }
    else if (idx === this.length) {
      this.append(item);
      return;
    }
    else if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length++;

    const curr = this.getNodeAt(idx) as Node<T>;
    const newNode = { item } as Node<T>;

    newNode.next = curr;
    newNode.previous = curr.previous;
    curr.previous = newNode;

    if (newNode.previous) {
      newNode.previous.next = newNode;
    }
  }

  remove(item: T): T | undefined {
    const node = this.getNodeBy(item);

    if (!node) {
      return undefined;
    }

    this.removeNode(node);
    return node.item;
  }

  get(idx: number): T | undefined {
    const node = this.getNodeAt(idx);
    return node?.item;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getNodeAt(idx);

    if (!node) {
      return undefined;
    }

    this.removeNode(node);
    return node.item;
  }

  private getNodeAt(idx: number): Node<T> | undefined {
    if (idx < 0 || idx > (this.length - 1)) {
      return undefined;
    }

    let curr = this.head as Node<T>;

    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next as Node<T>;
    }

    return curr;
  }

  private getNodeBy(item: T): Node<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    let curr = this.head as Node<T>;

    for (let idx = 0; curr?.item !== item && idx < this.length; idx++) {
      curr = curr.next as Node<T>;
    }

    return curr;
  }

  private removeNode(node: Node<T>): void {
    this.length--;

    if (node.previous) {
      node.previous.next = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    }

    if (!node.previous) {
      this.head = node.next;
    }
    if (!node.next) {
      this.tail = node.previous;
    }

    node.previous = null;
    node.next = null;
  }
}
