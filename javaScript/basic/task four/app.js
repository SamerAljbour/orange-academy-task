// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("------------------------------------------")

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0)
        console.log(i);
}
console.log("------------------------------------------")
// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let l = 0;
while (l <= 10) {
    if (l % 2 === 1)
        console.log(l);
    l++;
}

console.log("------------------------------------------")
// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let userInput = prompt("enter a number");
for (let i = 0; i <= 12; i++)
    console.log(userInput * i)
console.log("------------------------------------------")
// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    console.log(sum);
    i++;
}
console.log("------------------------------------------")
// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let input = prompt(" enter the number you want to calc the factorial");
input = Number(input)
let sumFac = 1;
for (let i = input; i > 0; i--) {
    sumFac *= i

}
console.log(sumFac)
console.log("------------------------------------------")
// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
let feboInput = Number(prompt("enter febo number"));//5
let pre = 1;
let pre2 = 0;
let feboSum = 0;
let j = 1;
while (j < input) { // j 1 2 3
    feboSum = pre + pre2;// pre -----> 1 pre2 -----> 2
    j++;
    console.log(feboSum); // sum ---> 3
    pre2 = pre // pre2 ----> 2
    pre = feboSum; //pre ----> 3
}
// }
console.log("------------------------------------------")
// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop
let numbers = [5, 15, 10, 20];
let reversedNumbers = [];
let isEmpty = false;
let index = 3;
let max = 0;

while (!isEmpty) {
    console.log("index = " + index);
    if (numbers[index] === undefined || numbers[index] === null) {
        console.log(" upper index" + index)
        isEmpty = true;
        break;
    }
    max = 0;
    if (numbers[index] > max) {
        console.log("value = " + numbers[index]);
        max = numbers[index];
    }


    console.log(` the max is ${max} in itreation ${index}`)
    reversedNumbers.push(max);
    console.log(" poped " + numbers.pop());
    index--;
}



console.log(reversedNumbers);