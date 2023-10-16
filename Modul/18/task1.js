
// Завдання 1
//Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
//Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
//Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну за межами блоку, та подивитись на результат

//Global Scope
let globalVar = "Global Scope Variable";

function globalScopeFunction() {
  console.log(globalVar);
}
console.log(globalVar);
globalScopeFunction();

// Function Scope
function functionScope() {
  let localVar = "Function Scope Variable";
  console.log(localVar);
}
functionScope();

// Block Scope
function blockScopeFunction() {
  if (true) {
    let blockVar = "Block Scope Variable";
    console.log(blockVar);
  }
}
blockScopeFunction();