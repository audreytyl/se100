// let stockPrice = 300;

// console.log('stockprice: ',stockPrice);

// console.log(`hello word, the stock price is ${stockPrice}`);
// //need to use backticks


// let money = 6000;

// money += 3000;
// console.log('money: ',money);

// money*= 3;
// console.log('money: ',money);


//better practice, second method has to use the correct identifier type
// const company = "Microsoft";
// const closingPrice = 200.92;

// console.log(`${company} ended the trading session with a closing price of ${closingPrice}`);
// console.log("%s ended the trading session with a closing price of %f", company, closingPrice);


// const welcome_string = "Welcome to a world of JavaScript";

// //end index is ecxclusive
// const char = welcome_string.substring(0,7);


// console.log(welcome_string.indexOf('a')); 

// const companyName = "Metaa"
// let formattedCompanyName = companyName.substring(0,companyName.length-1)
// formattedCompanyName = formattedCompanyName.toUpperCase();
// console.log(formattedCompanyName);


// const DayOneClosingPrice = "87.14";
// const DayTwoClosingPrice = "84.22";
// console.log(DayOneClosingPrice)
// console.log(DayTwoClosingPrice)

// // Do not modify anything above
// // Write your code below

// const average = (parseFloat(DayOneClosingPrice) + parseFloat(DayTwoClosingPrice)) / 2;
// console.log(average);

// const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

// const sum = TSLAClosingPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // for (let i = 0; i < TSLAClosingPrices.length; i++) {
// //     total += TSLAClosingPrices[i];
// // }

// let average = sum  / TSLAClosingPrices.length;
// console.log(average);


// let random_array = [3,1,5,6,2];

// console.log(random_array.sort());

// console.log(random_array.reverse());


// const AAPLCurrentBar = {
// 	open: 81.12,
// 	high: 82.59,
// 	low: 80.09,
// 	close: 84.71
// }

// const AAPLPrevBar = {
// 	open: 81.02,
// 	high: 82.49,
// 	low: 79.09,
// 	close: 83.71
// }

// // Write your code below
// const Open = (AAPLPrevBar.open + AAPLPrevBar.close)/2;
// const Close = (AAPLCurrentBar.open + AAPLCurrentBar.close + AAPLCurrentBar.high + AAPLCurrentBar.low)/4;

// const allValues = Object.values(AAPLCurrentBar);

// //... passes an array as iterable
// const High = Math.max(...allValues);
// const Low = Math.min(...allValues);

// console.log(Open);
// console.log(Close);
// console.log(High);
// console.log(Low);

// const stockOHLC = {
// 	open: 81.12,
// 	high: 82.59,
// 	low: 80.09,
// 	close: 84.71,
// }

// // Write your code below

// if (stockOHLC.open === stockOHLC.close) {
//     console.log("Stock are equal");
// }
// if(stockOHLC.open > stockOHLC.close) {
//     console.log("Stock is bearish");
// }
// else{
//     console.log("Stock is bullish");
// }

const notificationChannel = "email";

switch (notificationChannel) {
    case "email":
        console.log("Email notification");
        break;
    case "sms":
        console.log("SMS notification");
        break;
    case "push":
        console.log("Push notification");
        break;
    default:
        console.log("Unknown notification channel");
}
