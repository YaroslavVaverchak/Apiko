//// Дано: Написати функцію вищого порядку compose 
// яка прийматиме довільну кількість функцій як 
// аргумент і створюватиме з них композицію Написати 
// карі функцію (modifyArray) яка прийматиме спочатку 
// як аргумент функцію (modifyCondition), а далі прийматиме 
// як аргумент масив стрічок (data), карі функція повинна 
// повертати модифікований масив згідно умови (modifyCondition) 
// яка прийшла на початку карі функції Написати композиції 
// allToLower та capitalizeAllFirst використовуючи власний compose 
// та modifyArray які прийматимуть масив стрічок та повертатимуть 
// наступний 
// результат: const testArray = 
// ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
// 1) allToLower - приймає testArray -> перетворює стрічки так що 
// усі символи приводяться до нижнього регістру 
// 'Result: custom - web - and - mobile - platforms length: 39'
// 2) capitalizeAllFirst - приймає testArray -> перетворює стрічки 
// так що лише перший символ у верхньому регістрі, інші у нижньому, 
// об'єднує їх в одну стрічку з символом'-' -> виводить в консоль 
// 'Result: Custom-Web-And-Mobile-Platforms length: 31'


// Функція `compose` приймає довільну кількість функцій і повертає композицію цих функцій.
function compose(...functions) {
  return function (data) {
    return functions.reduceRight((result, fn) => fn(result), data);
  };
}

// Функція `modifyArray` приймає функцію `modifyCondition` і масив стрічок `data`.
// Вона застосовує `modifyCondition` до кожного елементу масиву і повертає модифікований масив.
function modifyArray(modifyCondition) {
  return function (data) {
    return data.map(modifyCondition);
  };
}

// Функція `allToLower` перетворює стрічки на нижній регістр і об'єднує їх дефісами.
function allToLower(data) {
  const modifiedData = data.map((str) => str.toLowerCase()).join(" - ");
  const length = modifiedData.length;
  console.log(`Result: ${modifiedData} length: ${length}`);
  return modifiedData;
}

// Функція `capitalizeAllFirst` перетворює перший символ кожної стрічки в верхній регістр і об'єднує їх дефісами.
function capitalizeAllFirst(data) {
  const modifiedData = data.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join("-");
  const length = modifiedData.length;
  console.log(`Result: ${modifiedData} length: ${length}`);
  return modifiedData;
}

// Вхідний масив
const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

// Створюємо композицію функцій для `allToLower` і викликаємо її
const composeAllToLower = compose(modifyArray(allToLower));
composeAllToLower(testArray);

// Створюємо композицію функцій для `capitalizeAllFirst` і викликаємо її
const composeCapitalizeAllFirst = compose(modifyArray(capitalizeAllFirst));
composeCapitalizeAllFirst(testArray);
