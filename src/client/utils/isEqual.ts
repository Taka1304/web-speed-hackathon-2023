export function isEqual(prevProps: unknown, nextProps: unknown) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}