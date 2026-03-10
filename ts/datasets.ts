export const getDataset = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const getReverseDataset = () => getDataset().reverse();

export const getEvenNumbers = () => getDataset().filter(isEven);

export const getOddNumbers = () => getDataset().filter(isOdd);

export const getBigNumbers = () => getDataset().filter(isBigNumber);

export const getSmallNumbers = () => getDataset().filter(isSmallNumber);

const isEven = (num: number) => num % 2 == 0;

const isOdd = (num: number) => !isEven(num);

const isBigNumber = (num: number) => num >= 5;

const isSmallNumber = (num: number) => !isBigNumber(num);
