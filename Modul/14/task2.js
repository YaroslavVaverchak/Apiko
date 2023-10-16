// Завдання 2
// Дано: функція яка приймає масив чисел
// Результат: вивести у консоль "YES" якщо усі числа у масив парні та "NO" в іншому випадку
// Приклад:
// [1, 2, 3, 9] => “NO”
// [2, 4, 6] => “YES”

function isEvenArray(initialArray) {
    let yesNoCounter = "YES";
    for (let index = 0; index < initialArray.length; index++) {
      if (initialArray[index] % 2 === 1) {
        yesNoCounter = "NO";
        break;
      }
    }
    console.log(yesNoCounter);
  }
  
  isEvenArray([1, 2, 3, 9]); 
  isEvenArray([2, 4, 6]);
  isEvenArray([2, 4, 5]);