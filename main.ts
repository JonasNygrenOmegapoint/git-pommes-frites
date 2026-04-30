function main() {
  printHello();
}

const printHello = () => {
  printMessage("Hello, World!");
};

const printMessage = (message: string) => {
  console.log(message);
};

main();
