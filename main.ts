function main() {
  printHello();
}

const printHello = () => {
  printMessage("Hello, World!");
};

const printNiceMessage = () => {
  printMessage("Happy to be of service!");
};

const printEerieMessage = () => {
  printMessage("I'm sorry Dave, I'm afraid I can't do that.");
};

const printMessage = (message: string) => {
  console.log(message);
};

main();
