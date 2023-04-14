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

//Запомни слова
function wordsToRemember() {

const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  } 

for (let i = 1; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }

alert(words.join(', '));

const firstWord = prompt('Чему равнялся первый элемент массива?').toLowerCase();
const lastWord = prompt('Чему равнялся последний элемент массива?').toLowerCase();

if (firstWord === words[0] && lastWord === words[words.length - 1]) {
  alert('Поздравляем, вы угадали оба элемента!');
} else if (firstWord === words[0] || lastWord === words[words.length - 1]) {
  alert('Вы были близки к победе!');
} else {
  alert('Вы ответили неверно!');
}
}