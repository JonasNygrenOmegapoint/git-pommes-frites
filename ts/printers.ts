import {
  getBigNumbers,
  getDataset,
  getEvenNumbers,
  getOddNumbers,
  getReverseDataset,
  getSmallNumbers,
} from "./datasets.ts";

export const printDataset = () => console.log(getDataset());

export const printReverseDataset = () => console.log(getReverseDataset());

export const printEvenNumbers = () => console.log(getEvenNumbers());

export const printOddNumbers = () => console.log(getOddNumbers());

export const printBigNumbers = () => console.log(getBigNumbers());

export const printSmallNumbers = () => console.log(getSmallNumbers());
