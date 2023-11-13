type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (this.length === 0 || !this.tail) {
            this.tail = node;
            this.head = node;

            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (this.length === 0 || !this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // In a real-world scenario, it would be necessary to manage
        // the memory to not rely on the garbage collection.
        // free();
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
