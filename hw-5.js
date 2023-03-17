//Задание 1
function biggerNumber(a, b) {
    if (a > b) {
        return a
    } else if (a < b) {
        return b;
    }
    else if (a = b) {
        return a
    }
}

console.log(biggerNumber(5, 3));

//Задание 2
function oddOrNot(a) {
    if (a == 0) {
        return ('Число является нулём')
    } else if (a % 2 == 0) {
        return ('Число чётное')
    } else if (a == '') {
        return ('Вы ничего не ввели')
    } else if (a % 2 !== 0) {
        return ('Число нечётное')
    }
}

console.log(oddOrNot(2));

//Задание 3
function calc(a) {
    let numberSquare = a ** 2;
    console.log(`Квадрат числа - ${numberSquare}`);
    return numberSquare;
}

calc(10)

//Задание 4
const userAge = Number(prompt('Сколько Вам лет?'));
if (userAge <= 0) {
    alert('Вы ввели неправильное значение')
}
else if (userAge <= 12) {
    alert('Привет, друг!')
}
else if (userAge >= 13) {
    alert('Добро пожаловать!')
}

//Задание 5
function numCheck() {
    let num1 = prompt('Введите первое число');
    let num2 = prompt('Введите второе число');

    if (!isNaN(num1) && !isNaN(num2)) {
        return alert(`Произведение введённых чисел: ${num1 * num2}`)
    }
    else {
        alert('Одно или оба значения не являются числом')
    }
}

numCheck();

//Задание 6
function cube() {
    let cubeNumber = prompt('Введите число для возведения в куб');

    if (cubeNumber == '') {
        return ('Вы ничего не ввели')
    }
    else if (!isNaN(cubeNumber)) {
        return (`n в кубе равняется ${cubeNumber ** 3}`)
    }
    else if (isNaN(cubeNumber)) {
        return ('Переданный параметр не является числом')
    }
}

console.log(cube());

//Задание 7
function getCircleArea() {
    return ('Площадь круга равна', (this.radius ** 2) * 3.14)
}

function getCirclePerimeter() {
    return ('Периметр окружности равен', this.radius * 2 * 3.14)
}

const circle1 = {
    radius: Number(prompt('Введите радиус первой окружности')),
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: Number(prompt('Введите радиус второй окружности')),
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};


console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8
function timeOfTheYear() {
    a = prompt('Введите месяц от 1 до 12');

    if (a <= 0 || a > 12 || a === isNaN) {
        alert('Пожалуйста, введите число от 1 до 12')
    }
    else if (a == 1 || a == 2 || a == 12) {
        alert('Это зимний месяц')
    }
    else if (a >= 3 && a <= 5) {
        alert('Это весенний месяц')
    }
    else if (a >= 6 && a <= 8) {
        alert('Это летний месяц')
    }
    else if (a >= 9 && a <= 11) {
        alert('Это осенний месяц')
    }
}

console.log(timeOfTheYear());