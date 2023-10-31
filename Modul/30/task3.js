//Завдання 3
//Завдання. Створити нового користувача - зробити POST запит на ендпоінт 'https://jsonplaceholder.typicode.com/users'.
//Використати fetch.
//Для нового користувача вказати поля name, username, email.
//Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
//Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
//Після отримання відповіді від API, перевірити чи запит виконався успішно
//Вивести у консоль результат

const baseUrl = "https://jsonplaceholder.typicode.com";
const newUser = {
  name: "Name LastName",
  username: "UserName",
  email: "usermail@gmail.com"
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
};

fetch(`${baseUrl}/users`, options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  })
  .then((createdUser) => {
    console.log("Result:", createdUser);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
