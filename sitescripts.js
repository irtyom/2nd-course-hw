//Времена года
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