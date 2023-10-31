//Завдання 1
//На лекції ми використовували API jsonplaceholder - 'https://jsonplaceholder.typicode.com/'
//Можна перейти за посиланням і ще раз ознайомитись з даним API
//Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
//const baseUrl = "https://jsonplaceholder.typicode.com";
//Будемо використовувати ресурс /users щоб отримати дані користувачів
//Завдання: Отримати список користувачів з віддаленого ресурсу /users.
//Використати fetch.

const baseUrl = "https://jsonplaceholder.typicode.com";
const usersUrl = `${baseUrl}/users`;

fetch(usersUrl)
  .then((response) => response.json())
  .then((users) => {
    console.log("Result:", users);
  })
  .catch((error) => {
    console.error("Error:", error);
  });