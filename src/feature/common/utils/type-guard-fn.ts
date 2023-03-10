export const isNotNullOrUndefined = <T>(
  value: T | undefined | null
): value is T => {
  return !!value;
};
