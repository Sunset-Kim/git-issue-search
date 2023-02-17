export function range(start: number, end: number) {
  const _start = Math.min(start, end);
  const _end = Math.max(start, end);

  const length = _end - _start + 1;
  return Array.from({ length }, (_, index) => index + _start);
}
