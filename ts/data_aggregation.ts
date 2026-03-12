import { getBigNumbers, getSmallNumbers } from "./datasets.ts";
import { product, sum } from "./list_operations.ts";

export const sumBigNumbers = () => sum(getBigNumbers());

export const productSmallNumbers = () => product(getSmallNumbers());
