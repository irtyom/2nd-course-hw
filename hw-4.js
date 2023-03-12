//Задание 1
let hello = 0;

while (hello < 2) {
    console.log('Привет');
    hello++;
}

//Задание 2
for (let i = 1; i < 6; i++) {
    console.log(i);
}


//Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}
for (let key in obj) {

    console.log(`${key} — зарплата ${obj[key]} долларов`);

}

//Задание 5
let num = 0;
for (let n = 1000; n > 50; n /= 2, num++) {
    console.log(`Финальное число - ${n}`, `Количество итераций - ${num}`)
}

//Задание 6
let friday;

do {
    friday = Number(prompt("Какого числа в этом месяце первая пятница? (от 1 до 7)"));
} while (friday <= 0 || friday > 7);

do {
    console.log(`Отчётный день - ${friday}-го числа`);
    friday += 7;
} while (friday <= 31);