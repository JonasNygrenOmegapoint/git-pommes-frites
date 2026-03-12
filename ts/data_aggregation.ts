import {
  getBigNumbers,
  getDataset,
  getEvenNumbers,
  getOddNumbers,
  getSmallNumbers,
} from "./datasets.ts";
import { average, median, product, sum } from "./list_operations.ts";

export const sumBigNumbers = () => sum(getBigNumbers());

export const sumSmallNumbers = () => sum(getSmallNumbers());

export const sumAllNumbers = () => sum(getDataset());

export const productSmallNumbers = () => product(getSmallNumbers());

export const averageEvenNumbers = () => average(getEvenNumbers());

export const medianOddNumbers = () => median(getOddNumbers());
