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

export const printDivider = () => {
  console.log("");
  console.log("o----------x----------o");
  console.log("");
};

export const printFirsts = () => {
  console.log("First number", getDataset()[0]);
  console.log("First reverse number", getReverseDataset()[0]);
  console.log("First big number", getBigNumbers()[1]);
  console.log("First small number", getSmallNumbers()[0]);
  console.log("First even number", getEvenNumbers()[0]);
  console.log("First odd number", getOddNumbers()[0]);
};
