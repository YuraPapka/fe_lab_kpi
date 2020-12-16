export const randomInteger = (max: number, min = 0) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const onceFrom = (num: number): boolean => {
  if (num < 2) {
    throw new Error('Number argument need must be more than two');
  }
  return randomInteger(num, 1) === 1;
}
