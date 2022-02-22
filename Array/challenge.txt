let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let my1 = my
    .slice(zero, counter - true)
    .sort()
    .reverse();

let my2 = my
    .slice(counter - true, counter + true)
    .sort()
    .reverse();
my = my2.concat(my1);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero + true, counter)); // ["Elham", "Mazero"]

my = my.slice(zero + true, counter);
let str1 = my[zero].slice(zero, counter - true);
let str2 = my[zero + true].slice(counter - true);

console.log(str1 + str2); // "Elzero"
str = str1 + str2;
strfinal = str.slice(counter + true);
console.log(strfinal[zero] + strfinal[zero + true].toLocaleUpperCase()); // "rO"
