//Завдання 3
//Дано: код в якому необхідно знайти помилку і виправити її
//Результат: вивести в консоль “meow”

const cat = {
    sound: 'meow',
    greet: function() {
      setTimeout(() => {
        console.log(this.sound)
      }, 0);
    }
  };
  
  cat.greet(); // should produce "meow