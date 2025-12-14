function walk<T>(head: BinaryNode<T> | null, path: T[]): T[] {
  if (!head) {
    return path;
  }

  // Visit node
  path.push(head.value);

  // Recurse left
  walk<T>(head.left, path);
  // Recurse right
  walk<T>(head.right, path);

  // We have to return the reference to the array because of TS compiler.
  // Another option is to set the function's return type to void and simply
  // update the path parameter.
  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, new Array<number>());
}
