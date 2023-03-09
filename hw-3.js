//Задание 1
let password = prompt('Установите пароль');
let userPassword = prompt('Введите пароль')
password == userPassword ? alert('Пароли совпадают') : alert('Пароли несовпадают');

//Задание 2
let c = Number(prompt('Введите число от 1 до 9'));
(c > 0 && c < 10) ? alert('Верно') : alert('Ошибка');

//Задание 3
let d = Number(prompt('Введите любое число больше 100'));
let e = Number(prompt('Введите второе число больше 100'));
(d > 100 || e > 100) ? alert('Верно') : alert('Ошибка');

//Задание 4
let a = 2;
let b = 3;
console.log(a + b);

//Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
        alert('Это зимний месяц - январь')
        break;
    case 2:
        alert('Это зимний месяц - февраль')
        break;
    case 3:
        alert('Это весенний месяц - март')
        break;
    case 4:
        alert('Это весенний месяц - апрель')
        break;
    case 5:
        alert('Это весенний месяц - май')
        break;
    case 6:
        alert('Это летний месяц - июнь')
        break;
    case 7:
        alert('Это летний месяц - июль')
        break;
    case 8:
        alert('Это летний месяц - август')
        break;
    case 9:
        alert('Это осенний месяц - сентябрь')
        break;
    case 10:
        alert('Это осенний месяц - октябрь')
        break;
    case 11:
        alert('Это осенний месяц - ноябрь')
        break;
    case 12:
        alert('Это зимний месяц - декабрь')
        break;
    default:
        alert('Такого месяца не бывает :)');
        break;
}

//Задание 7
let oddNumber = prompt('Введите любое число');
if (oddNumber === null || oddNumber === '') {
    alert('Вы ничего не ввели')
} else if (isNaN(Number(oddNumber))) {
    alert('Введено не число');
} else {
    (Number(oddNumber) % 2) ? alert('Число является нечётным') : alert('Число является чётным');
}

//Задание 8
const clientOS = Number(prompt('Пожалуйста, укажите, пользователем какой ОС Вы являетесь: 0 - iOS, 1 - Android'));
if (clientOS !== 0 && clientOS !== 1) {
    alert('Пожалуйста, введите 0 или 1');
}
else if (clientOS === 0) {
    alert('Установите версию приложения для iOS');
}
else if (clientOS === 1) {
    alert('Установите версию приложению для Android');
}

//Задание 9
let clientDeviceYear = Number(prompt('Пожалуйста, укажите год производства Вашего телефона'));
if (clientOS === 0 && clientDeviceYear < 2015) {
    alert('Установите облегчённую версию приложения для iOS по ссылке');
}
else if (clientOS === 0 && clientDeviceYear > 2015) {
    alert('Установите полную версию приложения для iOS по ссылке');
}
else if (clientOS === 1 && clientDeviceYear < 2015) {
    alert('Установите облегчённую версию приложения для Android по ссылке')
}
else if (clientOS === 1 && clientDeviceYear > 2015) {
    alert('Установите полную версию приложения для Android по ссылке')
}