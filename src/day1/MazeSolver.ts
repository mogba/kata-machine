const directions = [
  [0, +1], // Up
  [+1, 0], // Right
  [0, -1], // Down
  [-1, 0], // Left
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  visited: boolean[][],
  path: Point[],
) {
  // 1. Pre-recurse
  // Check maze boundaries
  if (
    curr.x < 0 ||
    curr.y >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // Check wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // Check visited positions
  if (visited[curr.y][curr.x]) {
    return false;
  }

  visited[curr.y][curr.x] = true;
  path.push(curr);

  // Check end
  if (curr.y === end.y && curr.x === end.x) {
    return true;
  }

  // 2. Recurse
  for (let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i];

    if (
      walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, visited, path)
    ) {
      return true;
    }
  }

  // 3. Post-recurse
  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const visited: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    // maze[0].length is used because all maze lines have the same length
    visited.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, visited, path);

  return path;
}
