export const getDataset = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const getEvenNumbers = () => getDataset().filter((num) => num % 2 == 0);

export const getOddNumbers = () => getDataset().filter((num) => num % 2 != 0);
