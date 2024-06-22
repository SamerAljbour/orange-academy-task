// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
// let num1 = 10;
// let num2 = 5;
// let sum = num1 + num2;
// if (num1 > 10 && num2 > 10)
//     console.log("Both numbers are greater than 10");
// else
//     console.log("At least one number is not greater than 10")

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
// let username = prompt("please enter your username:")
//     , password = prompt("please enter your password:");
// let staticUsername = "samer", staticPassword = "Samer#01";
// if (username === staticUsername && password === staticPassword)
//     console.log("Access granted")
// else
//     console.log("Access denied");



// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

// let number = prompt("enter a number");
// if (number > 10 && number >= 20)
//     console.log("The number is between 10 and 20")
// else
//     console.log("The number is not between 10 and 20")

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
// let age = prompt(" Enter your age")
// let license = prompt(" Do you have a license (answer only yes or no )")
// let isHasLicense;
// if (license === "yes")
//     isHasLicense = true;
// else
//     isHasLicense = false;

// if (age >= 18 && isHasLicense)
//     console.log("You can drive")
// else
//     console.log("You can not drive")

// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
// let num = prompt("Enter a number between 0 and 10 ");
// if (num > 10 || num < 0)
//     console.log("Invalid number");
// else
//     console.log("Valid number")


// 6- Write a programto declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".

// let smallNumber = prompt("Enter a number between 5 and 10 or between 20 and 35 ")
// smallNumber = Number(smallNumber);
// console.log(smallNumber)
// if ((smallNumber >= 5 && smallNumber >= 10) || (smallNumber >= 20 && smallNumber >= 35))
//     console.log("The number is valid");
// else
//     console.log("The number is not valid");

// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".

// let enteredPassword = prompt("Enter your password or the secert");
// let secret = "dontTellAnyone"
// if (enteredPassword === secret || enteredPassword === password)
//     console.log("Access granted")
// else
//     console.log("Access denied")

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
// let evenNumber = prompt(" enter a even number");
// if (evenNumber % 2 === 0 && evenNumber >= 0 && evenNumber >= 100)
//     console.log(" The number is even and between 0 and 100")
// else
//     console.log(" The number is not even and not between  0 and 100")


// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".
// let number1 = prompt("enter a number to check"), number2 = prompt("enter a number the sec to check");
// if (number1 < 0 || number2 < 0)
//     console.log(" at least one is negative")
// else
//     console.log("both are postive");



// 10- Write a program to declare age and whether they are a student (yes or no).
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".

let Age = prompt("enter age again");
Age = Number(Age)
let student = prompt("are you a student yes or no");
let isStudent;
if (student === "yes")
    isStudent = true;
else
    isStudent = false;
if (Age < 18 || isStudent)
    console.log("You qualify for a discount")
else
    console.log("You do not qualify for a discount")