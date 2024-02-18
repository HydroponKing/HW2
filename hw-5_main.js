// Задача 1
function findMin(a, b) {
    return Math.min(a, b);
}
// Пример
console.log(findMin(8, 5)) // БУДЕТ 8

//Задача 2
function checkEven(num) {
    return num % 2 === 0 ? 'четное' : 'нечетное'
}
// пример
console.log(checkEven(4));
console.log(checkEven(7));

//задача 3.1
function printSquare(num) {
    console.log(num ** 2);
}
//пример
printSquare(4);// выведет 16

// задача 3.2
function calcSquare(num) {
    return num ** 2;
}
// пример 
console.log(calcSquare(4));

// Задача 4
function greetUserAge(age) {
    if (age < 0) {
        console.log("неверное значение");
    }
    else if (age <= 12) {
        console.log("привет друг");
    }
    else {
        console.log("Добро пожаловать!");
    }
}
// примерр
greetUserAge(8); // выведет 8
greetUserAge(15); // выведет 15

// Задача 5
function multiplyNum(a, b) {
    if (isNas(a) || isNas(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b;
    }
}
//Прием использования:
console.log(multiplyNum(2, 3));
console.log(multiplyNum("a", 5));

// Задача 6
function cubeAndReturnString() {
    let userInput = prompt("Введите число:");

    if (isNaN(userInput)) {
        return 'Переданный параметр не является числом';
    }

    let number = parseFloat(userInput);
    let cubeResult = Math.pow(number, 3);

    return `${number} в кубе равняется ${cubeResult}`;
}

// проверка функции
for (let i = 0; i <= 10; i++) {
    console.log(cubeAndReturnString(i));
}
// пример использования
console.log(cubeAndReturn(3));// выведет : 3 в кубе = 27
console.log(cubeAndReturnString("abc"));//выведет "переданный параметр не является числом"

// задача 7
function createCircle(radius) {
    return {
        radius: radius,
        getArea: function () {
            return Math.PI * this.radius ** 2;
        },
        getPerimeter: function () {
            return 2 * Math.PI * this.radius;
        }
    };
}
const circle1 = createCircle(5);
const circle2 = createCircle(8);

// Пример использования:
console.log(circle1.getArea()); // Выведет площадь круга circle1
console.log(circle2.getPerimeter()); // Выведет периметр окружности circle2