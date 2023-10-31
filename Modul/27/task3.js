//Завдання 3
//Створити ф-ію timer, яка приймає число(секунди) та імітує 
//поведінку таймера: кожну секунду виводить в консоль стрічку Timer: ${s}, де ${s} - кількість секунд що залишилось

function timer(seconds) {
    let remainingSeconds = seconds;
  
    const intervalId = setInterval(function () {
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        console.log("Timer: 0");
      } else {
        console.log(`Timer: ${remainingSeconds}`);
        remainingSeconds--;
      }
    }, 1000);
  }
  
  // Виклик функції timer з вказаною кількістю секунд
  timer(10);
  