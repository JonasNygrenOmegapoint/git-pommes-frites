import {
  printBigNumbers,
  printDataset,
  printDivider,
  printEvenNumbers,
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
}

main();
