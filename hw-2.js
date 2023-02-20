// Задание 1
let numberAlert = 10;
console.log(numberAlert);
numberAlert = 20;
console.log(numberAlert);

// Задание 2
const firstIphoneYear = 2007;
console.log(`Год выпуска первого iPhone: ${firstIphoneYear}`);

// Задание 3
const javaScriptCreator = 'Brendan Eich';
console.log(`Имя создателя JavaSctipt: ${javaScriptCreator}`);

// Задание 4
let var10 = 10;
let var2 = 2;
console.log(`Результат деления двух переменных: ${var10 / var2}`);
console.log(`Результат сложения двух переменных: ${var10 + var2}`);
console.log(`Результат вычитания двух переменных: ${var10 - var2}`);
console.log(`Результат произведения двух переменных: ${var10 * var2}`);

// Задание 5
let result = 2 ** 5;
console.log(`Результат возведения 2 в степень 5: ${result}`);

// Задание 6
let a = 9;
let b = 2;
console.log(`Остаток от деления двух переменных: ${a % b}`);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;

// Задание 8
console.log(`Результат операций присваивания: ${num}`);
let age = Number(prompt("Сколько Вам лет?"));
console.log(`Вам ${age} года(лет)`);

// Задание 9
//9.1
const user = {
    name: 'Artyom',
    age: 19,
    isAdmin: false,
    "cityOfResidence": 'Minsk',
}

//9.2
age = 20;

//9.3
delete user.cityOfResidence;

//9.4
let info = prompt("Какую информацию Вы хотите узнать о пользователе?");
alert(user[info]);

//Задание 10
let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName}!`);