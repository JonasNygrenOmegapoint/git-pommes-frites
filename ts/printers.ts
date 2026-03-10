import { getBigNumbers, getDataset, getReverseDataset } from "./datasets.ts";

export const printDataset = () => console.log(getDataset());

export const printReverseDataset = () => console.log(getReverseDataset());

export const printBigNumbers = () => console.log(getBigNumbers());

export const printDivider = () => {
  console.log("");
  console.log("o----------x----------o");
  console.log("");
};
