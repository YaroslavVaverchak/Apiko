//Завдання 2
//Дано: обєкт Date та його методи https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//Створити ф-ію clock, яка імітує поведінку годинника: кожну секунду виводить в консоль час у форматі "Hours:Minutes:Seconds";

function clock() {
    setInterval(function () {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
  
      console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }
  
  // Виклик функції для розпочатку відліку часу
  clock();
  