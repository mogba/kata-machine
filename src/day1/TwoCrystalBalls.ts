export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;

  // First step is to find an index in which the ball is already broken
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // Go back to the last checking point
  i -= jumpAmount;

  // Second step is to find the exact index in which the ball has broken
  for (let j = 0; j <= jumpAmount; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
