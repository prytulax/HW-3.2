// 1
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Температура в Фаренгейтах:", fahrenheit);

// 2
let daysInMonth = 31;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = daysInMonth * 1440;
console.log("Годин у місяці:", hoursInMonth);
console.log("Хвилин у місяці:", minutesInMonth);

// 3
let health = 100;
let energy = 100;
health -= 5;
energy -= 20;
console.log("Здоров'я після зменшення:", health);
console.log("Енергія після зменшення:", energy);

// 4
let totalPrice = 500;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);
console.log("Ціна зі знижкою:", discountedPrice);

// 5
const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log("Округлено вниз:", roundedDown);

// 6
const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(typeof parsedFloat);
console.log( parsedFloat);

// 7
const intString = "123";
let parsedInt = parseInt(intString);
console.log(typeof parsedInt);
console.log( parsedInt);

// 8
let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log("Квадратний корінь:", sqrtNumber);

// 9
const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log("convertedInt:", convertedInt);
console.log("convertedString:", convertedString);