import { getBigNumbers } from "./datasets.ts";
import { sum } from "./list_operations.ts";

export const sumBigNumbers = () => sum(getBigNumbers());
