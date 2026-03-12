import { getBigNumbers, getEvenNumbers, getSmallNumbers } from "./datasets.ts";
import { average, product, sum } from "./list_operations.ts";

export const sumBigNumbers = () => sum(getBigNumbers());

export const productSmallNumbers = () => product(getSmallNumbers());

export const averageEvenNumbers = () => average(getEvenNumbers());
