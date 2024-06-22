
/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
// let arr1 = [1, 7, 9, 45];
// let arr2 = ["Str", "alex", "moh"];
// let arr3 = ['the', 'fox', 'over', 'lazy', 'dog']

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// var fruits = ["Tomato", "Banana", "Watermelon"]
// console.log(fruits.indexOf("Banana"))
// console.log(fruits.indexOf("Tomato"))

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// let FavoriteFood = ["shawrma", "mansaf", "ms5an ", "mansaf", "ms5an "];
// let FavoriteSport = ["blah", "blah", "blah "];
// let FavoriteMovie = ["blah", "blah", "blah ", "blah"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// function firstOfArray(arr) {
//     console.log(arr[0])
// }
// let array = (["t", "u", "g", "x"])
// firstOfArray(array)
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// function firstOfArray(arr) {
//     console.log(arr[arr.length - 1])
// }
// let array = (["t", "u", "g", "x"])
// firstOfArray(array)

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// let array = [0, 5, 7, 9]
// console.log(array.shift()) //  remove first element
// console.log(array)
// console.log(array.unshift(4)) // add first element
// console.log(array)
// console.log(array.push(12)) // add last element
// console.log(array)
// console.log(array.pop()) // remove last element
// console.log(array)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// let array = [0, 5, 7, 9]
// console.log(array.shift()) //  remove first element
// console.log(array)
// console.log(array.unshift(4)) // add first element
// console.log(array)
// console.log(array.push(12)) // add first element
// console.log(array)
// console.log(array.pop()) // add first element
// console.log(array)

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


// let numbers = [2, 4, 3, 15, 1, 4, 3, 6];
// function middleOfArray(numbers) {
//     if (numbers.length % 2 === 1)
//         return numbers[parseInt((numbers.length / 2))]
//     else
//         return (`${numbers[parseInt((numbers.length / 2 - 1))]} ${numbers[parseInt((numbers.length / 2))]} `)
// }
// console.log(middleOfArray(numbers))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
// var animals = ['cat', 'ele', 'bird']
// animals[1] = 'zebra'
// animals[2] = 'elephant'
// console.log(animals)
// var nums = [1, 2, 3, 8, 9]
// nums[0] = 5;
// nums[1] = -22;
// nums[2] = 3.5;
// nums[3] = 44;
// nums[4] = 98;
// nums[5] = 44;
// console.log(nums)
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
// function indexOfArray(array, index) {
//     return array[index]
// }
// var nums = [1, 2, 3, 8, 9]
// console.log(indexOfArray(nums, 3))
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
// function arrayExceptLast(array) {

//     return array.slice(0, length - 1)
// }
// var nums = [1, 2, 3, 8, 9]
// console.log(arrayExceptLast(nums))

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// function addToEnd(array, value) {
//     array.push(value)
// }
// var nums = [1, 2, 3, 8, 9];
// addToEnd(nums, 55)
// console.log(nums)


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function sumArray(array) {
//     var sum = 0;
//     for (let i = 0; i < array.length; i++)
//         sum += array[i];
//     console.log(sum)
// }
// var nums = [1, 2, 3, 8, 9]
// sumArray(nums)

// function sumArray(array) {
//     var sum = 0;
//     let i = 0;
//     while (i < array.length) {
//         sum += array[i];
//         i++;
//     }


//     console.log(sum)
// }
// var nums = [1, 2, 3, 8, 9]
// sumArray(nums)


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// let min = 10000000
// function minInArray(array) {

//     for (let i = 0; i < array.length; i++)
//         if (array[i] < min)
//             min = array[i]
//     console.log(min)
// }
// var nums = [1, 2, 3, 8, 9]
// minInArray(nums)
// let min = 10000000
// function minInArray(array) {
//     let i = 0
//     while (i < array.length) {
//         if (array[i] < min)
//             min = array[i]
//         i++
//     }
//     console.log(min)
// }
// var nums = [1, 2, 3, 8, 9]
// minInArray(nums)
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function removeFromArray(array, element) {
//     for (let i = 0; i < array.length; i++)
//         if (element === array[i]) {
//             array.splice(i, 1);
//             --i;
//         }
//     console.log(array)
// }
// function removeFromArray(array, element) {
//     let i = 0;
//     while (i < array.length) {
//          if (element === array[i]) {
//array.splice(i, 1)
//--i;
// }
//     console.log(array)

// }
// var nums = [1, 2, 3, 8, 9]
// removeFromArray(nums, 8);
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var nums = [1, 2, 3, 8, 9]
// function oddArray(array) {
//     for (let i = 0; i < array.length; i++)
//         if (array[i] % 2 === 0) {
//             array.splice(i, 1)
//             i--;
//         }
//     console.log(array)
// }
// function oddArray(array) {
//     let i = 0;
//     while (i < array.length) {
//         if (array[i] % 2 === 0)
//             array.splice(i, 1)
//         i++;
//     }
//     console.log(array)
// }
// oddArray(nums)
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function aveArray(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++)
//         sum += array[i]

//     console.log(sum / array.length)
// }
// var nums = [1, 2, 3, 8, 9]
// aveArray(nums)
// function aveArray(array) {
//     let sum = 0
//     let i = 0;
//     while (i < array.length) {
//         sum += array[i]
//         i++;
//     }
//     console.log(sum / array.length)
// }
// var nums = [1, 2, 3, 8, 9]
// aveArray(nums)
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function shorterInArray(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++)
//         if (array[i] < min)
//             min = array[i];
//     console.log(min);
// }
// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
// shorterInArray(strings)
// function shorterInArray(array) {
//     let min = array[0];
//     let i = 1;
//     while (i < array.length) {
//         if (array[i] < min)
//             min = array[i];
//         i++
//     }
// console.log(min);

// }
// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
// shorterInArray(strings)
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function repeatChar(array, element) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++)
//         if (element === array[i])
//             counter++
//     console.log(counter)

// }
// var string = "alex mercer madrasa rashed2 emad hala"
// repeatChar(string, "a")


// function repeatChar(array, element) {
//     let counter = 0;
//     let i = 0;
//     while (i < array.length) {
//         if (element === array[i])
//             counter++
//         i++
//     }

//     console.log(counter)

// }
// var string = "alex mercer madrasa rashed2 emad hala"
// repeatChar(string, "a")

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function evenIndexOddLength(array) {
//     var odd = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length % 2 === 1 && i % 2 === 0) {
//             odd.push(array[i]);
//         }



//     }
//     console.log(odd)
// }

// function evenIndexOddLength(array) {
//     var odd = [];
//     let i = 0;
//     while (i < array.length) {
//         if (array[i].length % 2 === 1 && i % 2 === 0)
//             odd.push(array[i]);
//         i++
//     }


//     console.log(odd)

// }


// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]

// evenIndexOddLength(strings)
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function powerElementIndex(array) {
//     for (let i = 0; i < array.length; i++) {
//         newArra.push(array[i] ** i)
//     }
//     console.log(newArra)
// }
// var nums = [44, 5, 4, 3, 2, 10]
// var newArra = []
// powerElementIndex(nums)

// function powerElementIndex(array) {
//     let i = 0;
//     while (i < array.length) {
//         newArra.push(array[i] ** i)
//         i++;
//     }

//     console.log(newArra)
// }
// var nums = [44, 5, 4, 3, 2, 10]
// var newArra = []
// powerElementIndex(nums)

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function evenNumberEvenIndex(array) {
//     var newArr = [];
//     for (let i = 0; i < array.length; i++)

//         if (array[i] % 2 === 0 && i % 2 === 0)
//             newArr.push(array[i]);
//     console.log(newArr)
// }

// var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]
// evenNumberEvenIndex(nums)

// function evenNumberEvenIndex(array) {
//     var newArr = [];
//     let i = 0;
//     while (i < array.length) {
//         if (array[i] % 2 === 0 && i % 2 === 0)
//             newArr.push(array[i]);
//         i++;
//     }

//     console.log(newArr)
// }

// var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]
// evenNumberEvenIndex(nums)
