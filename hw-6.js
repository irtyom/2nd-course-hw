//Задание 1
let firstArr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < firstArr.length; i++) {
    console.log(firstArr[i]);
    if (firstArr[i] == 10) break;
}

//Задание 2
let secondArr = [1, 5, 4, 10, 0, 3];

console.log(`Индекс числа 4 в массиве: ${secondArr.indexOf(4)}`);

//Задание 3
let thirdArr = [1, 3, 5, 10, 20];

thirdArr = thirdArr.join(' ');

console.log(thirdArr);

//Задание 4
let fourthArr = [];
let innerArr = [];

for (let i = 0; i < 3; i++) {
  innerArr.push(1);
}

for (let i = 0; i < 3; i++) {
  fourthArr.push(innerArr);
}

console.log(fourthArr);

//Задание 5
let fifthArr = [1, 1, 1];

fifthArr.push(2, 2, 2);

console.log(fifthArr);

//Задание 6
let sixthArr = [9, 8, 7, 'a', 6, 5];

sixthArr = sixthArr.sort();
sixthArr.pop();

console.log(sixthArr);

//Задание 7
let seventhArr = [9, 8, 7, 6, 5];
let i = 0;
let arrCheck = Number(prompt('Введите число от 1 до 10'));

seventhArr.forEach((el) => {
    if (el === arrCheck) {
        i++;
    }
})

if (i >= 1) {
    console.log(`Введенное число содержится в данном массиве, количество совпадений = ${i}`);
}

if (i === 0) {
    console.log('Введенное число отсутствует в данном массиве');
}

//Задание 8
let eighthStr = 'abcdef';
let eighthArr = eighthStr.split('');

eighthArr = eighthArr.reverse();

eighthArr = eighthArr.join('');

console.log(eighthArr);

//Задание 9
let ninthArr = [
    [1, 2, 3],
    [4, 5, 6],
]

ninthArr = ninthArr.flat();

console.log(ninthArr);

//Задание 10
let tenthArr = [1, 5, 2, 7, 2, 6]; //сумма - 23
let tenthCounter = 0;

console.log(`Введённые элементы для суммы: ${tenthArr}`);

for (let el of tenthArr) {
    tenthCounter += el;
    console.log(tenthCounter);
}

//Задание 11 
function squareArray(eleventhArr) {
    let squaredEleventhArr = eleventhArr.map(function (num) {
        return num * num;
    });
    return squaredEleventhArr;
}

let eleventhArr = [1, 2, 3, 4, 5];
let squaredEleventhArr = squareArray(eleventhArr);
console.log(squaredEleventhArr);

//Задание 12
function getWordLengths(twelfthArr) {
    let lengthsArr = [];
    for (let i = 0; i < twelfthArr.length; i++) {
        let wordLength = twelfthArr[i].length;
        lengthsArr.push(wordLength);
    }
    return lengthsArr;
}

let twelfthArr = ['я', 'ты', 'вам', 'тебе', 'семья'];
let wordLengths = getWordLengths(twelfthArr);
console.log('Количество букв в словах массива: ' + wordLengths);

//Задание 13
function getNegativeNumber(thirteenthArr) {
    let negativeArr = [];
    for (let i = 0; i < thirteenthArr.length; i++) {
        if (thirteenthArr[i] < 0) {
            negativeArr.push(thirteenthArr[i])
        }
    }
    return negativeArr;
}

let thirteenthArr = [0, -1, 2, -3, 4, -5];
let negativeArr = getNegativeNumber(thirteenthArr);
console.log(negativeArr);