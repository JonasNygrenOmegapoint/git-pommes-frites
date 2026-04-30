function main() {
  printHello();
  printNiceMessage();
  printIndifferentMessage();
}

const printHello = () => {
  printMessage("Hello, World!");
};

const printNiceMessage = () => {
  printMessage("Happy to be of service!");
};

const printIndifferentMessage = () => {
  printMessage("I have no string feeling one way or the other.");
};

const printMessage = (message: string) => {
  console.log(message);
};

main();
