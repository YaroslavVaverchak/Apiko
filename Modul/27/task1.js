//Завдання 1
//Створити ф-ію isString, яка першим параметром отримує 
//функцію колбек та другим значення. Перевіряє чи передане 
//значення це стрічка і колбек це функція та виконує колбек із 
//цим значенням або виводить помилку в консоль якщо це не стрічка або колбек не є функцією

function isString(callback, value) {
    if (typeof value === "string" && typeof callback === "function") {
      callback(value);
    } else {
      console.error("Error: Value is not a string or callback is not a function.");
    }
  }
  
  // Приклад використання
  function callbackFunction(str) {
    console.log("Received string:", str);
  }
  
  isString(callbackFunction, "Hello, world!"); // Викличе колбек із переданою стрічкою
  isString(callbackFunction, 123); // Виведе помилку в консоль, оскільки 123 не є стрічкою
  isString("Not a function", "Some string"); // Виведе помилку в консоль, оскільки колбек не є функцією
  