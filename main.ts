function main() {
  printHello();
}

const printHello = () => {
  printMessage("Hello, World!");
};

const printNiceMessage = () => {
  printMessage("Happy to be of service!");
};

const printMessage = (message: string) => {
  console.log(message);
};

main();
