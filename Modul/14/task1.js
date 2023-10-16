// Завдання 1
// Дано: функція яка приймає масив чисел або стрічок.
// Результат: вивести у консоль масив унікальних значень початкового масиву
// Приклад: [2, 3, 1, 3, 3, 7] => [2,3,1,7]

function uniqueFn(initialArray) {
    return initialArray.filter((value, index, array) => array.indexOf(value) === index);
  }
  
  const initialArray = [2, 3, 1, 3, 3, 7];
  const uniqueArray = uniqueFn(initialArray);
  console.log(uniqueArray);