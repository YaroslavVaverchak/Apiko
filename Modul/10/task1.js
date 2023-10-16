// Завдання 1
function printPowsOf2(number) {
  if (typeof number === "number" && number >= 1) {
    console.log(1);
    let index = 1;
    while (index < number) {
      index *= 2;
      if (index <= number) {
        console.log(index);
      }
    }
  } else {
    console.log("Введене значення не є числом або менше за 1!");
  }
}

printPowsOf2(64);
printPowsOf2(9999);
printPowsOf2("64");
printPowsOf2(null);