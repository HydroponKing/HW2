//Задание 1

for (let i = 0; i < 2; i++) {
    console.log("Привет");
}
//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}
//Задание 4

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}
//Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
console.log("Полученное число:", n);
console.log("Количество итераций:", num);

//Задание 6
// Первая пятница месяца - 5 число
const firstFriday = 5;
const daysInMonth = 31;

for (let i = firstFriday; i <= daysInMonth; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}