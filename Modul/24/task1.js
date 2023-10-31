// 1) Створити ф-ію конструктор Calculator та до її 
// прототипу добавити два методи sum(a,b) та subtract(a,b)
// 2) Створити ф-ію конструктор AdvancedCalculator 
// (наслідує методи від Calculator) та до її прототипу 
// добавити два методи multiply(a,b) та divide(a,b)

// Функція конструктора Calculator
function Calculator() {
    this.sum = function (a, b) {
      return a + b;
    };
  
    this.subtract = function (a, b) {
      return a - b;
    };
  }
  
  // Функція конструктора AdvancedCalculator, яка успадковує від Calculator
  function AdvancedCalculator() {
    Calculator.call(this); 
  
    this.multiply = function (a, b) {
      return a * b;
    };
  
    this.divide = function (a, b) {
      if (b === 0) {
        return "Cannot divide by zero!";
      }
      return a / b;
    };
  }
  
  const basicCalculator = new Calculator();
  const advancedCalculator = new AdvancedCalculator();

  console.log("Basic Calculator Sum:", basicCalculator.sum(10, 5));
  console.log("Basic Calculator Subtract:", basicCalculator.subtract(10, 5));
  
  console.log("Advanced Calculator Sum:", advancedCalculator.sum(10, 5));
  console.log("Advanced Calculator Subtract:", advancedCalculator.subtract(10, 5));
  console.log("Advanced Calculator Multiply:", advancedCalculator.multiply(10, 5));
  console.log("Advanced Calculator Divide:", advancedCalculator.divide(10, 5));
 