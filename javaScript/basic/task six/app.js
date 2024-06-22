// 1-Write a function to find the largest element in an array.
// let number = [2, 4, 7, 20, 3];
// let max = 0;
// function findTheLargest(number) {

//     for (let i = 0; i < number.length; i++) {
//         if (number[i] > max)
//             max = number[i]//20
//     }
//     console.log(max)
// }
// findTheLargest(number)

// 2-Write a function to find the smallest element in an array.
// let number = [2, 4, 7, 20, 3, -3];

// function findThesmallest(number) {
//     let min = number[0];
//     for (let i = 1; i < number.length; i++) {
//         if (number[i] < min)
//             min = number[i];
//     }
//     console.log(min)
// }
// findThesmallest(number)


// 3-Write a function to find the sum of all elements in an array.
// let number = [2, 4, 7, 15, 30, 20, 3, -3];
// let sum = 0;
// function sumOfArray(number) {
//     for (let i = 0; i < number.length; i++)
//         sum += number[i]; //sum = sum + number[i]
//     console.log(sum)
// }
// sumOfArray(number)

// 4-Write a function to find the average of all elements in an array.
// let number = [2, 4, 7, 15, 30, 20, 3, -3];
// let sum = 0;
// function sumOfArray(number) {
//     for (let i = 0; i < number.length; i++)
//         sum += number[i]
//     console.log(`the average ${sum / number.length}`)
// }
// sumOfArray(number)

// 5-Write a function to find the median of all elements in an array.
// let numbers = [2, 4, 3, 15, 1, 4, 3, 5];
// function findMedian(numbers) {
//     if (numbers.length % 2 === 1)

//         return numbers[parseInt((numbers.length / 2))]
//     else
//         return (numbers[parseInt((numbers.length / 2 - 1))] + numbers[parseInt((numbers.length / 2))]) / 2
// }
// console.log(findMedian(numbers))
// 6-Write a function to remove all duplicates from an array.

// let number = [2, 4, 7, 15, 15, 7, 30, 30, 3, -3];
// let duplicate = 0;
// function duplicateNumber(number) {
//     for (let i = 0; i < number.length; i++) {
//         duplicate = number[i];//2 4
//         for (let j = i + 1; j < number.length; j++)//1 2 3 4
//             if (duplicate == number[j]) {

//                 number.splice(i, 1);
//                 i--;
//             }

//     }
//     console.log(number)
// }
// duplicateNumber(number)

// 7-Write a function to sort an array in ascending order.
// let array = [10, 8, 15, 5, 20, 18, 35] // [8,10]
// let temp = 0;
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++)
//         if (array[i] > array[j]) {
//             temp = array[i] //10
//             array[i] = array[j]
//             array[j] = temp;
//         }

// }
// console.log(array)

// 8-Write a function to sort an array in descending order.
// let array = [10, 8, 15, 5]
// let temp = 0;
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++)
//         if (array[i] < array[j]) {
//             temp = array[i]
//             array[i] = array[j]
//             array[j] = temp;
//         }

// }
// console.log(array)
// 9-Write a function to shuffle the elements of an array randomly.
// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) { // 11
//         const random = Math.floor(Math.random() * (i)); // 11 * 1
//         [arr[i], arr[random]] = [arr[random], arr[i]]; // Swap elements
//     }
// }

// let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// shuffleArray(randomArray);
// console.log(randomArray)

