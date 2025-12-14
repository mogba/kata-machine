import Queue from "./Queue";

export default function bfs(
  head: BinaryNode<number>,
  needle: number,
): boolean {
  const queue = new Queue<BinaryNode<number> | null>();
  queue.enqueue(head);

  while (queue.length) {
    let curr = queue.deque()

    if (!curr) {
      continue;
    }
    if (curr.value === needle) {
      return true;
    }

    queue.enqueue(curr.left);
    queue.enqueue(curr.right);
  }

  return false;
}
