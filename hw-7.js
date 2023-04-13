//Задание 1
let stringOne = 'ЯвНо НеРовНый ТекСТ';

stringOne = stringOne.toLowerCase();

console.log(stringOne);

//Задание 2
function filterArrayByPrefix(arr, prefix) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        const currentStr = arr[i].toLowerCase();

        if (currentStr.startsWith(prefix.toLowerCase())) {
            filteredArr.push(currentStr);
        }
    }

    return filteredArr;
}

console.log(filterArrayByPrefix(['КОшка', 'кошка', 'котик'], 'ко'));

//Задание 3
const numberThird = 32.58884;
//3.1
let resultFloor = Math.floor(numberThird);
console.log('Округление до меньшего целого: ', resultFloor);
//3.2
let resultCeil = Math.ceil(numberThird);
console.log('Округление до большего целого: ', resultCeil);
//3.3
const resultRound = Math.round(numberThird);
console.log('Округление до ближайшего целого: ', resultRound);

//Задание 4
let numbers = [52, 53, 49, 77, 21, 32];
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

console.log(`Наименьшее число из массива: ${minNumber}`);
console.log(`Наибольшее число из массива: ${maxNumber}`);

//Задание 5
function randomNumber() {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log('Случайное число от 1 до 10: ', num);
}

randomNumber()

//Задание 6
function generateRandomArray(num) {
    const arr = [];
    for (let i = 0; i < num / 2; i++) {
        arr.push(Math.floor(Math.random() * (num + 1)));
    }
    return arr;
}

console.log(generateRandomArray(10));

//Задание 7
function getRandomFromTwo(min, max) {
    min = Math.ceil(Math.abs(min));
    max = Math.floor(Math.abs(max));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomFromTwo(4, 10));

//Задание 8
let currDate = new Date();
console.log(currDate);

//Задание 9
let currentDate = new Date();
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

//Задание 10
function formatDate(date) {

    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const day = date.getDate();
    const month = date.toLocaleString("DEFAULT", { month: "short" });
    const year = date.getFullYear();
    const weekday = daysOfWeek[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата: ${day} ${month} ${year} - это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const todayDate = new Date();
console.log(formatDate(todayDate));