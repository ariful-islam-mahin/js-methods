var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

var fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits2);

// using splice() to remove elements
var fruits3 = ["Banana", "Orange", "Apple", "Mango"];

fruits3.splice(2, 2);
console.log(fruits3);

