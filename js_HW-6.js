//Задача 1
let array = [1, 5, 4, 10, 0, 3];

for (let value of array) {
    console.log(value);

    if (value === 10) {
        break;
    }
}

//Задача 2
let arrayTask2 = [1, 5, 4, 10, 0, 3];
let indexFour = arrayTask2.indexOf(4) + 1;
if (indexFour !== 0) {
    console.log('Цифра "4" находится на', indexFour, 'месте в массиве');
} else {
    console.log('Цифра "4" не найдена в массиве');
}

//Задача 3
let numbers = [1, 3, 5, 10, 20];
let result = numbers.join(' ');//пробел

console.log(result);

//Задача 4
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1;
  }
}
console.log(arr);

//Задача 5 
let myArrayTask5 = [1, 1, 1]
myArrayTask5.push(2, 2, 2);
console.log(myArrayTask5);

//Задача 6 
let myArray = [9, 8, 7, 'a', 6, 5];
let numericArray = myArray(item => typeof item === 'number');
numericArray.sort((a, b) => a - b);
console.log(numericArray);

//Задача 7 
let arrT7 = [9, 8, 7, 6, 5];

let userGuess = prompt("Попробуйте угадать число из массива");

if (arrT7.includes(Number(userGuess))) {
  alert("Угадал!");
} else {
  alert("Не угадал!");
}

//Задача 8
let originalString = 'abcdef';
let reversedString = originalString.split('').reverse().join('');
console.log(reversedString);
//p.s. я хотел просто сделать с массивом так сказать reverse (let reversedString = originalString.reverse();), но JS выдал ошибку. Как я понял это потому что стрки (string) не имеют метода reverse ;;;;(((((


//Задача 9 

let arrT9 = [[1, 2, 3], [4, 5, 6]];
let flattened = arrT9.flat();
console.log(flattened);
//Задача 10 
let myArrayTask10 = [2, 1, 3, 5, 8, 9, 4, 7, 6, 10];

for (let i = 0; i < myArrayTask10.length - 1; i++) {
    let currentElement = myArrayTask10[i];
    let nextElement = myArrayTask10[i + 1];
    let sum = currentElement + nextElement;
    console.log(`Сумма ${currentElement} и ${nextElement} равна ${sum}`);
}

//Задача 11
let inputArray = [1, 2, 3, 4, 5];
function squareArray(arr) {
    let squaredArray = arr.map(num => num * num);
    return squaredArray;
}
let resultArray = squareArray(inputArray);
console.log(resultArray);

//Задача 12
function getLengthWords(arr) {
    let lengthsArray = arr.map(word => word.length);
    return lengthsArray;
}
let resultTask12 = getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(resultTask12);

//Задача 13
function filterPositive(array) {
    let negativeArray = array.filter(num => num < 0);
    return negativeArray;
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56]));
  console.log(filterPositive([-25, 25, 0, -1000, -2]));
