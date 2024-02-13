// Задание 1
let q;
q = 10;
alert(q);
q = 20;
alert(q);

//

// Задание 2
let firstiPhoneReleaseYear = 2007;
alert(firstiPhoneReleaseYear);

// Задание 3
let jsCreatorName = "Brendan Eich";
alert(jsCreatorName);

// Задание 4
let num1 = 10;
let num2 = 2;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);

// Задание 5
let result = Math.pow(2, 5);
alert(result);

// Задание 6
let a = 9;
let b = 2;
let remainder = a % b;
alert(remainder);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9.0
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

// Задание 9.1
user["city of residence"] = "New York";

// Задание 9.2
user.age = 35;

// Задание 9.3
delete user["city of residence"];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
// Так же выполнил в html файле
let userName = prompt("Введите ваше имя:");
alert(`Привет, ${userName}!`);