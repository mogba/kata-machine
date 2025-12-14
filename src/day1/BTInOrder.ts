function walk<T>(head: BinaryNode<T> | null, path: T[]): T[] {
  if (!head) {
    return path;
  }

  // Recurse left
  walk<T>(head.left, path);

  // Visit node
  path.push(head.value);

  // Recurse right
  walk<T>(head.right, path);

  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, new Array<number>())
}
