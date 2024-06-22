/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// let name = prompt("enter your partner name")
//     , jobTitle = prompt("enter your job title")
//     , geographicLocation = prompt("enter your geographic location")
//     , numberOfChildren = prompt("enter your number of children")
// function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
//     console.log(`your job title is ${jobTitle} , you location is ${geographicLocation} , your partner name is ${partnerName} , you have ${numberOfChildren} children`)
// }
// tellFortune(name, jobTitle, geographicLocation, numberOfChildren);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// let Age = Number(prompt("enter your age"))//2
// function calculateDogAge(age) {
//     console.log(`Your doggie is ${age * 7} years old in dog years!`)
// }
// calculateDogAge(Age);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// let personAge = Number(prompt("please enter your age"))

//     , amountPerDay = Number(prompt("enter the amount"))
// function calculateSupply(age, amountPerDay) {
//     console.log(`${(100 - age) * amountPerDay * 365}`)
// }
// calculateSupply(personAge, amountPerDay)

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// let name = prompt("enter you name")
// function greet(name) {
//     return `hello ${name}`;
// }
// console.log(greet(name))
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}


function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
// let cat = prompt()
// function double(cat) {
//     return 2 * cat;
// }
// function double() {
//     return 2 * 7;
// }
// function double(x = 7) {
//     return 2 * x;
// }

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
// function double1(x) {
//     return 2 * x;
// }

// function double2(x) {
//     return 2 * x;
// }

// function double3(x) {
//     return 2 * x;
// }
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// let value = Number(prompt("enter the cube value"))
// function cube(value) {

//     console.log(cube = Math.pow(value, 3))// value ** 3
// }
// cube(value)
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// let num1 = Number(prompt("enter the first value"))
// let num2 = Number(prompt("enter the second value"))
// function multi(num1, num2) {
//   console.log(num1 * num2);
// }
// multi(num1, num2);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// let lisAge = Number(prompt("enter your age to see if u van get license"))
// function canIGetADrivingLicense(age) {
//     if (age >= 20)
//         console.log("yes you can");
//     else
//         console.log(`please come back after ${20 - age} to get one`)
// }
// canIGetADrivingLicense(lisAge)

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// function str(str1, str2) {
//     return str1.length === str2.length
// }
// let strr = console.log(str("hello", "sssss"))
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// let num1 = 3, num2 = 4;
// function largerNumber(num1, num2) {
//   if (num1 > num2)
//     return num1
//   else
//     return num2
// }
// let result = console.log(largerNumber(num1, num2))

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
// let min = 100000;
// function smallerNumber(num1, num2, num3) {
//   if (num1 < min)
//     min = num1
//   if (num2 < min)
//     min = num2;
//   if (num3 < min)
//     min = num3
//   console.log(min)
// }
// smallerNumber(10, 1, 3)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

// function shorterString(str1, str2, str3, str4, str5) {
//   let minstr = str1;

//   if (str2.length < minstr.length)
//     minstr = str2
//   if (str3.length < minstr.length)
//     minstr = str3
//   if (str4.length < minstr.length)
//     minstr = str4
//   if (str5.length < minstr.length)
//     minstr = str5
//   console.log(minstr)
// }
// shorterString("air", "tr", "car", "github", "by")
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
// function shorterString(str1, str2, str3, str4, str5) {
//   let maxstr = str1;

//   if (str2.length > maxstr.length)
//     maxstr = str2
//   if (str3.length > maxstr.length)
//     maxstr = str3
//   if (str4.length > maxstr.length)
//     maxstr = str4
//   if (str5.length > maxstr.length)
//     maxstr = str5
//   console.log(maxstr)
// }
// shorterString("air", "tr", "car", "github", "by")
/*
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

// function isEven(number) {
//   if (number % 2 === 0)
//     return true
//   else
//     return false
// }
// console.log(isEven(2))
/*

16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// function isEven(number) {
//   if (number % 2 === 1)
//     return true
//   else
//     return false
// }
// console.log(isEven(1))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// function positive(number) {
//   if (number >= 0)
//     return "passed";
//   else
//     return -number


// }
// console.log(positive(-1))

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// function fullName(fName, Lname) {
//   return fName.concat(" ", Lname)
// }
// console.log(fullName("Alex", "Mercer"))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// function average(num1, num2, num3, num4, num5) {
//   return (num1 + num2 + num3 + num4 + num5) / 5;
// }
// console.log(average(5, 7, 9, 3, 5));
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// function randomNumber() {
//   console.log(Math.random())
// }
// randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(max, min) {
  return (Math.random(1, 8) * (max - min)) + min;
}
console.log(randomBetweenNumbers(8, 1))
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// function scoreInUniversty(grade) {
//   if (grade <= 100 && grade >= 95)
//     console.log("A")
//   else if (grade >= 85 && grade <= 94)
//     console.log("B")
//   else if (grade >= 70 && grade <= 84)
//     console.log("C")
//   else if (grade >= 50 && grade <= 69)
//     console.log("D")
//   else if (grade >= 0 && grade <= 49)
//     console.log("f")
// }
// scoreInUniversty(94);
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// let obj = {
//   start: 0,
// }
// function addOne(obj) {
//   console.log(obj.start += 1)
// }
// addOne(obj);
// addOne(obj);
// addOne(obj);
// addOne(obj);
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
// let objCounter = {
//   counter: 0
// }
// function resetCounter(obj) {
//   console.log(`the number before reset ${obj.start = 0}`)
//   console.log("the counter reseted")
//   obj.start = 0
//counter =0;
// }
// resetCounter(obj)
// addOne(obj)