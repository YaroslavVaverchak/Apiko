//Завдання 4
//Створити клас який містить поле name.
//Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта
//Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання


class AutoNullify {
    constructor(name) {
      this.name = name;
      this.nullifyTimer = setTimeout(() => {
        this.name = null;
      }, 5000); 
    }
  
    cancelNullify() {
      clearTimeout(this.nullifyTimer);
    }
  }
  
  // Створення об'єкта класу AutoNullify
  const myObject = new AutoNullify("Hello, World");
  
  console.log(myObject.name); 
  
  // Скасовуємо занулення поля "name"
  myObject.cancelNullify();
  
  console.log(myObject.name); 