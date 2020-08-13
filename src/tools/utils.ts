export function getCount(count: number) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}

export function rangeArr(start: number, end: number): number[] {
  const len = end - start + 1;
  let step = start - 1;

  if (len <= 0) {
    return [];
  }

  return (Array as any).apply(null, { length: Math.abs(len) }).map(() => ++step);
}
