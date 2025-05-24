// // Exercise 1: Finding sum of numbers in an array 

// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// // Write your code below

// let sumMSFTStockClosingPrices = 0;

// for (let i=0; i< MSFTStockClosingPrices.length; i++) {
//     sumMSFTStockClosingPrices += MSFTStockClosingPrices[i];
// }

// console.log(`The total sum of closing prices of MSFT is: ${sumMSFTStockClosingPrices}`);


// Exercise 2: Finding the sum of numbers in a nested collection

// const MSFTStockClosingPrices = [
// {
// 	Monday: 254.12,
// 	Tuesday: 253.12,
// 	Wednesday: 256.97,
// 	Thursday: 257.52,
// 	Friday: 258.93
// },
// {
// 	Monday: 292.20,
// 	Tuesday: 289.73,
// 	Wednesday: 291.04,
// 	Thursday: 294.55,
// 	Friday: 296.29
// }]

// // Write your code below

// let sumEachObject = 0;  

// for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//     const nestedObject = MSFTStockClosingPrices[i];
//     console.log(nestedObject);
 
//     const allKeys = Object.keys(nestedObject);
//     for (let keyIndex = 0; keyIndex < allKeys.length; keyIndex++) {
//         sumEachObject += nestedObject[allKeys[keyIndex]];
//     }
//     console.log(`The total sum of closing prices of MSFT is: ${sumEachObject.toFixed(2)}`);
// }


// Exercise 3: Finding the sum of numbers in a nested collection
// You are to use `for`-`of` loop and/ or a`for`-`in` loop for this exercise.

// const MSFTStockClosingPrices = [
// {
// 	Monday: 254.12,
// 	Tuesday: 253.12,
// 	Wednesday: 256.97,
// 	Thursday: 257.52,
// 	Friday: 258.93
// },
// {
// 	Monday: 292.20,
// 	Tuesday: 289.73,
// 	Wednesday: 291.04,
// 	Thursday: 294.55,
// 	Friday: 296.29
// }]

// // Write your code below

// // let sumMSFTStockClosingPrices = 0;  

// // for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
// //     for (let day in MSFTStockClosingPrices[i]) {
// //         sumMSFTStockClosingPrices += MSFTStockClosingPrices[i][day];
// //     }
// // }
// // console.log(`The total sum of closing prices of MSFT is: ${sumMSFTStockClosingPrices.toFixed(2)}`);


// use for of and for in loop together

// let total = 0

// for (let weeklyprices of MSFTStockClosingPrices) {
//     for (let day in weeklyprices) {
//         total += weeklyprices[day];
//     }
// }
// console.log('The total is: ', total.toFixed(2))



//Exercise 4: Finding the sum of numbers in a nested collection using while loop

// const MSFTStockClosingPrices = [
// {
// 	Monday: 254.12,
// 	Tuesday: 253.12,
// 	Wednesday: 256.97,
// 	Thursday: 257.52,
// 	Friday: 258.93
// },
// {
// 	Monday: 292.20,
// 	Tuesday: 289.73,
// 	Wednesday: 291.04,
// 	Thursday: 294.55,
// 	Friday: 296.29
// }]

// // Write your code below

// let total = 0;

// let i = 0;
// while (i < MSFTStockClosingPrices.length) {
//     const weeklyPrices = MSFTStockClosingPrices[i];
//     for (let day in weeklyPrices) {
//         total += weeklyPrices[day];
//     }
//     i++;
// }
// console.log('The total is: ', total.toFixed(2));


// Exercise 5: Introduction to Functions

// You are to create a function that will calculate the number of values that are between 254 and 257, and then log the final value in the console.


// function getBetween() {
// 	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	
//     let count = 0;
//     for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//         if (MSFTStockClosingPrices[i] >= 254 && MSFTStockClosingPrices[i] <= 257) {
//             count++;
//         }
//     }
//     console.log(`Number of closing prices between 254 and 257: ${count}`); 

// }

// getBetween();

//Exercise 6: Functions with Parameters 

// function getBetween(ticker,closingPrices) {
//     let count = 0;
//     for (let i = 0; i < closingPrices.length; i++) {
//         if (closingPrices[i] >= 254 && closingPrices[i] <= 257) {
//             count++;
//         }
//     }
//     console.log(`Number of closing prices of ${ticker} between 254 and 257: ${count} Days`); 

// }

// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];

// getBetween('MSFT',MSFTStockClosingPrices);
// getBetween('AAPL',AAPLStockClosingPrices);


//Exercise 7: Creating a function
//You have been tasked to create a function called sortPerformanceInAscOrder() 
// that will return a list of daily performance sorted in ascending order.

const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

// Write your code below
function sortPerformanceInAscOrder(dailyPerformance) {
    // Sort the array in ascending order
    dailyPerformance.sort((a, b) => a - b);
    return dailyPerformance;
}

// Do not modify this code:
console.log(sortPerformanceInAscOrder(StockDailyPerformance));


//arrow function version
const sortPerformanceInAscOrderArrow = (dailyPerformance) => 
    dailyPerformance.sort((a, b) => a - b);


// Do not modify this code:
console.log(sortPerformanceInAscOrder(StockDailyPerformance));