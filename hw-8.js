//Задание 1
const peopleArr = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

peopleArr.sort((a, b) => a.age - b.age);

console.log(peopleArr);

//Задание 2
function filter(array, ruleFunction) {
  let result = []; // 
  array.map((element) => {
    if (ruleFunction(element)) { 
      result.push(element); 
    }
  });
  return result;
}

function isPositive(number) {
  return number > 0; 
}

function isMale(person) {
  return person.gender === 'male'; 
}

const numbers = [3, -4, 1, 9];
console.log(filter(numbers, isPositive)); 

const people = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 

//Задание 3
let count = 0; 

const timerId = setInterval(() => {
  const currentTime = new Date();
  console.log(currentTime);
  count += 3; 
  if (count === 30) {
    clearInterval(timerId);
    console.log("30 секунд прошло");
  }
}, 3000);

//Задание 4
function delayForSecond(callback) {
	setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб! (задание 4)');
});

//Задание 5
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда (задание 5)');
      if(cb) { 	cb(); }

  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));