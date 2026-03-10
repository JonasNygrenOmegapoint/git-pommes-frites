export const getDataset = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const getEvenNumbers = () => getDataset().filter(isEven);

export const getOddNumbers = () => getDataset().filter(isOdd);

const isEven = (num: number) => num % 2 == 0;

const isOdd = (num: number) => !isEven(num);
