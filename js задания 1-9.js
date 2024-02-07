// Задание 1:


let password = 'пароль';
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
// Задание 2:


let c = 0; // Измените значение переменной c для проверки разных случаев

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// Задание 3:


let d = 50; // Измените значение переменной d
let e = 120; // Измените значение переменной e

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// Задание 4:


let a = '2';
let b = '3';

alert(Number(a) + Number(b));
// Задание 5:


let monthNumber = 12; // Измените значение переменной monthNumber

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Номер месяца больше 12');
}
// Задание 7:


let userInput = prompt('Пожалуйста, введите любое число');
let number = parseFloat(userInput);

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
} else {
    alert('Введено не число');
}
// Задание 8:


let clientOS = 0; // 0 — iOS, 1 — Android

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}
// Задание 9:



let clientOS = 0; // 0 — iOS, 1 — Android
let clientDeviceYear = 2015; // год выпуска телефона

if (clientDeviceYear < 2015) {
    if (clientOS === 0) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else if (clientOS === 1) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} else {
    if (clientOS === 0) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else if (clientOS === 1) {
        console.log('Установите версию приложения для Android по ссылке');
    }
}