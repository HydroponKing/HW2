//Задача 1
let jsLow = 'js';
let hiJs = jsLow.toUpperCase();
console.log(hiJs);

//Задача 2 
function searchStart(arr, str) {
   return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['Кошка', 'Комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

//Задача 3 
let num = 32.58884;
let roundedDown = Math.floor(num);
console.log(roundedDown); // Выведет: 32 (меньшее целое)
let roundedUp = Math.ceil(num);
console.log(roundedUp); // Выведет: 33 (большое целое)
let rounded = Math.round(num);
console.log(rounded); // Выведет: 33 (ближайшее целое)

//Задача 4
let numbers = [52, 53, 49, 77, 21, 32];
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log("Min: " + min);
console.log("Max: " + max);

//Задача 5 
function printRandomNumber() {
   let randomNumber = Math.floor(Math.random() * 10) + 1;
}

printRandomNumber();

//Задача 6 
function getRandomArrNumbers(max) {
   let arrayLength = Math.floor(max / 2);
   let randomNumbers = [];

   for (let i = 0; i < arrayLength; i++) {
       randomNumbers.push(Math.floor(Math.random() * (max + 1)));
   }
   return randomNumbers;
}

console.log(getRandomArrNumbers(7)); // Например, [3, 2, 1]
console.log(getRandomArrNumbers(12)); // Например, [11, 9, 10, 5, 8, 3]

//Задача 7 
function getRandomNumberInRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumberInRange(1, 10)); 
console.log(getRandomNumberInRange(10, 20)); 

//Задача 8 
let currentDateT8 = new Date();
console.log(currentDateT8.toLocaleString());

//Задача 9 
let currentDateT9 = new Date();
let currentDay = currentDateT9.getDate();
currentDateT9.setDate(currentDay + 73);
console.log(currentDateT9.toLocaleString());

//Задача 10 
function formatDate(date) {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
 
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
 
    return `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
 }
 
 const currentDate = new Date();
 console.log(formatDate(currentDate));

//Задача 11
function startGame() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let guessPromptFirst = prompt("чему равняется 1-ый элемент в массиве?");
    let guessPromptLast = prompt("чему равнается последний элемент в массиве?");

    guessPromptFirst = guessPromptFirst ? guessPromptFirst.toLowerCase() : null;
    guessPromptLast = guessPromptLast ? guessPromptLast.toLowerCase() : null;

    if (guessPromptFirst === null || guessPromptLast === null) {
        alert("Вы отменили ввод.");
        return;
    }

    if (guessPromptFirst === fruit[0].toLowerCase() && guessPromptLast === fruit[fruit.length - 1].toLowerCase()) {
        alert("Поздравляем!!! Вы выиграли!!!");
    } else if (guessPromptFirst === fruit[0].toLowerCase() || guessPromptLast === fruit[fruit.length - 1].toLowerCase()) {
        alert("Вы были очень близко!!!");
    } else {
        alert("Вы проиграли ((((((");
    }
}
 

