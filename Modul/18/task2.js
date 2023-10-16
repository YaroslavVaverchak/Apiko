//Завдання 2
//В функції showCarInfo вивести в консоль name та model об'єкту 
//car використовуючи контекст через this, викликати функцію 
//showCarInfo використовуючи bind.

const car = {
    name: "Tesla",
    model: "Plaid",
  };
  
  function showCarInfo() {
    console.log(this.name, this.model);
  }
  
  const boundShowCarInfo = showCarInfo.bind(car);
  boundShowCarInfo();