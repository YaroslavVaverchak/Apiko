// Дано: Функція для генерації ID
// 1) Створити клас TodoItem із полями(властивостями): 
// id(генерується у конструкторі за допомогою функції), 
// name, checked(за замовчуванням false). Для поля checked 
// написати гетер та сетер (добавити валідацію: поле може 
// приймати лише булеве значення true або false)
// 2) Створити клас TodoList із полями: id(генерується у 
// конструкторі за допомогою функції), name, 
// items(за замовчуванням пустий масив).
// Добавити наступні методи:
// addItem - метод який добавляє елементи до масиву 
// (потрібно зробити валідацію на тип TodoItem)
// removeItemById - метод який видаляє елемент з масиву по id
// getItemById - метод який повертає елемент TodoItem з масиву по id
// 3) Створити екземпляр класу TodoList;
// 4) Створити 4 екземпляри класу TodoItem, добавити їх у 
// TodoList та вивести у консоль екземпляр класу TodoList.
// 5) Поміняти значення checked у одного екземпляру TodoItem 
// та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
// 6) Видалити 2 екземпляри TodoItem із TodoList та вивести у 
// консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
  
  class TodoItem {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this._checked = false; // Поле, яке буде використовуватися через геттер і сеттер
    }
  
    get checked() {
      return this._checked;
    }
  
    set checked(value) {
      if (typeof value === "boolean") {
        this._checked = value;
      }
    }
  }
  
  class TodoList {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this.items = [];
    }
  
    addItem(item) {
      if (item instanceof TodoItem) {
        this.items.push(item);
      }
    }
  
    removeItemById(id) {
      this.items = this.items.filter((item) => item.id !== id);
    }
  
    getItemById(id) {
      return this.items.find((item) => item.id === id);
    }
  }
  
  // Створюємо екземпляр TodoList
  const myTodoList = new TodoList("My Todo List");
  
  // Створюємо 4 екземпляри TodoItem
  const item1 = new TodoItem("Buy groceries");
  const item2 = new TodoItem("Finish homework");
  const item3 = new TodoItem("Go for a run");
  const item4 = new TodoItem("Call mom");
  
  // Добавляємо їх у TodoList
  myTodoList.addItem(item1);
  myTodoList.addItem(item2);
  myTodoList.addItem(item3);
  myTodoList.addItem(item4);
  
  // Виводимо TodoList у консоль
  console.log("TodoList:", myTodoList);
  
  // Змінюємо статус одного TodoItem
  item1.checked = true;
  
  // Виводимо TodoList у консоль після зміни
  console.log("TodoList after checking item1:", myTodoList);
  
  // Видаляємо 2 TodoItem
  myTodoList.removeItemById(item2.id);
  myTodoList.removeItemById(item4.id);
  
  // Виводимо TodoList у консоль після видалення
  console.log("TodoList after removing items 2 and 4:", myTodoList);
  