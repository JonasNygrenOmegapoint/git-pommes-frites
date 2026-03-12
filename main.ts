import {
  printBigNumbers,
  printDataAggregation,
  printDataset,
  printDivider,
  printEvenNumbers,
  printFirsts,
  printOddNumbers,
  printReverseDataset,
  printSmallNumbers,
} from "./ts/printers.ts";

function main() {
  printDataset();
  printReverseDataset();
  printDivider();
  printEvenNumbers();
  printOddNumbers();
  printDivider();
  printBigNumbers();
  printSmallNumbers();
  printDivider();
  printFirsts();
  printDivider();
  printDataAggregation();
}

main();
