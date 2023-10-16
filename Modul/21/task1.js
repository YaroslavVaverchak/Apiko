//Завдання
//Дано: Написати функцію вищого порядку compose яка прийматиме довільну кількість функцій як аргумент і створюватиме з них композицію 
//Написати карі функцію (modifyArray) яка прийматиме спочатку як аргумент функцію (modifyCondition), а далі прийматиме як аргумент масив стрічок (data), 
//карі функція повинна повертати модифікований масив згідно умови (modifyCondition) яка прийшла на початку карі функції 
//Написати композиції allToLower та capitalizeAllFirst використовуючи власний compose та modifyArray які прийматимуть масив стрічок та повертатимуть наступний 
//результат:
//const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
//1) allToLower - приймає testArray -> перетворює стрічки так що усі символи приводяться до нижнього регістру 'Result: custom - web - and - mobile - platforms length: 39'
//2) capitalizeAllFirst - приймає testArray -> перетворює стрічки так що лише перший символ у верхньому регістрі, інші у нижньому, об'єднує їх в одну стрічку з символом'-' -> виводить в консоль 'Result: Custom-Web-And-Mobile-Platforms length: 31'

// Функція вищого порядку "compose" створює композицію функцій.
const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data);

// Функція "modifyArray" застосовує передану умову (функцію) до масиву даних.
const modifyArray = modifyCondition => data => data.map(modifyCondition);

// Функція "capitalizeAllFirst" переводить перший символ кожної стрічки в верхній регістр.
const capitalizeAllFirst = data => {
  const modifiedData = data.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
  return `Result: ${modifiedData.join('-')} length: ${modifiedData.join('-').length}`;
};

// Функція "allToLower" переводить всі символи кожної стрічки в нижній регістр.
const allToLower = data => {
  const modifiedData = data.map(item => item.toLowerCase());
  return `Result: ${modifiedData.join(' - ')} length: ${modifiedData.join(' - ').length}`;
};

const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

// Використовуємо "compose" для створення композиції функцій.
const capitalizeAllFirstComposition = compose(capitalizeAllFirst, modifyArray);
const allToLowerComposition = compose(allToLower, modifyArray);

// Виводимо результат в консоль.
console.log(capitalizeAllFirstComposition(testArray));
console.log(allToLowerComposition(testArray));

