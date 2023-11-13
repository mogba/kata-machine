type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private current?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.current = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (this.length === 0 || !this.head) {
            this.head = node;
            this.current = node;

            return;
        }

        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === 0 || idx > this.length - 1 || !this.head) {
            return;
        }

        let current: Node<T> | undefined;
        let previous: Node<T> | undefined = undefined;
        let index = 0;

        do {
            current = current?.next || this.head;

            if (idx === index) {
                const node = { value: item } as Node<T>;

                this.length++;

                node.next = current;
                current = node;

                if (previous) {
                    previous.next = node;
                }

                return;
            }

            index++;
            previous = current;
        } while (current.next);
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (this.length === 0 || !this.current) {
            this.head = node;
            this.current = node;

            return;
        }

        this.current.next = node;
        this.current = node;
    }

    get(idx: number): T | undefined {
        if (this.length === 0 || idx > this.length - 1 || !this.head) {
            return undefined;
        }

        let current: Node<T> | undefined;
        let index = 0;

        do {
            current = current?.next || this.head;

            if (idx === index) {
                return current.value;
            }

            index++;
        } while (current.next);

        return undefined;
    }

    private removeItemAndUpdatePrevious(current: Node<T>, previous?: Node<T>) {
        this.length--;

        const newCurrent = current.next;

        // Updates the previous item's reference to the current item.
        if (previous) {
            previous.next = newCurrent;
        }

        if (this.head === current) {
            this.head = newCurrent;
        } else if (this.current === current) {
            this.current = newCurrent;
        }
    }

    remove(item: T): T | undefined {
        if (this.length === 0 || !this.head) {
            return undefined;
        }

        let current: Node<T> | undefined;
        let previous: Node<T> | undefined = undefined;

        do {
            current = current?.next || this.head;

            if (current.value === item) {
                this.removeItemAndUpdatePrevious(current, previous);

                // Deleted value
                return current.value;
            }

            previous = current;
        } while (current.next);

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (this.length === 0 || idx > this.length - 1 || !this.head) {
            return undefined;
        }

        let current: Node<T> | undefined;
        let previous: Node<T> | undefined = undefined;
        let index = 0;

        do {
            current = current?.next || this.head;

            if (idx === index) {
                this.removeItemAndUpdatePrevious(current, previous);

                // Deleted value
                return current.value;
            }

            index++;
            previous = current;
        } while (current.next);

        return undefined;
    }
}
