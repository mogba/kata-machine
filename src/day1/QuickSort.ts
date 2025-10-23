function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const currentPivot = arr[hi];
  let newPivotIdx = lo - 1;

  for (let partitionIdx = lo; partitionIdx < hi; partitionIdx++) {
    if (arr[partitionIdx] <= currentPivot) {
      // We have to set the new pivot's position
      newPivotIdx += 1;

      const tmp = arr[partitionIdx];
      arr[partitionIdx] = arr[newPivotIdx];
      arr[newPivotIdx] = tmp;
    }
  }

  newPivotIdx += 1;
  arr[hi] = arr[newPivotIdx];
  arr[newPivotIdx] = currentPivot;

  return newPivotIdx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
