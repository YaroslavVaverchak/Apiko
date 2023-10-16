//Завдання 6
//Дано: написати функцію logPersonNameAndInterests яка прийматиме довільну кількість аргументів стрічок 
//та виводитиме в консоль повне ім'я Person використовуючи виклик getFullName з контекстом Person, 
//а також перелік усіх його інтересів які приходять аргументами цієї функції
//Результат: виклик logPersonNameAndInterests з контекстом Person та переліком інтересів ['sushi', 'hiking'] 
//-> в консолі 'John Doe loves: sushi, hiking'

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const logPersonNameAndInterests = function (...interests) {
    const fullName = Person.getFullName.call(this); // Виклик getFullName з контекстом Person
    const interestsList = interests.join(', '); // Об'єднання інтересів в рядок

    console.log(`${fullName} loves: ${interestsList}`);
};

const testArgs = ['sushi', 'hiking'];

logPersonNameAndInterests.apply(Person, testArgs);