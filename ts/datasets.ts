export const getDataset = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const getReverseDataset = () => getDataset().reverse();

// FILTERED DATASETS

export const getBigNumbers = () => getDataset().filter(isBigNumber);

// --- PRIVATE FUNCTIONS ---

const isBigNumber = (num: number) => num > 5;
