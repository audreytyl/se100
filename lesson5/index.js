// setTimeout(() => {}, milliseconds)
// 2 parameters, the first is an arrow function to execute after the specified time, the second is the time in milliseconds

// const myArrowFunction = () => {
//   console.log("Hello, world!");
// setTimeout(myArrowFunction, 2000);


// promises
// represent the eventual success or failure of an asynchronous operation, along with its resulting value

// create a promise, use the new() constructor
// which has 2 parameters: resolve and reject
// 3 possible states: pending, fulfilled, rejected

// const myPromise = new Promise((resolve, reject) => {
//     //our asynchronous operation

//     setTimeout(() => {
//         resolve("Promise resolved!"); 
//     }, 2000);
    

//     // // if there was an error, we would call reject()
//     // reject("There was an error fetching the data");
// });

// console.log('start...');

// // .then accepts 1 parameter, a callback function that will be executed when the promise is resolved
// myPromise.then((resolveValue) => {
//     //do whatever you want with the resolved value
//     // and continue processing
//     console.log('result: ', resolveValue);
// })

// console.log('some other task...');


//Exercise 1:Promise

// function getNumberPromise() {
//     // Write your code here
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10); 
//         }, 2000);
//     });

//     return myPromise;
// }

// // Test the function
// getNumberPromise().then((value) => {
//     console.log(value); // Should log 10 after 2 seconds
// });


// if something went wrong, we can use the reject() method
// function getNumberPromise() {
//     // Write your code here
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(10); 
//             reject("Error: Unable to fetch the number");
//         }, 2000);
//     });

//     return myPromise;
// }

// // Test the function
// // uncaught error shown in console since .then() only handles the success case, doesnt handle the error case
// getNumberPromise()
// .then((value) => {
//     console.log(value); // Should log 10 after 2 seconds
// })
// .catch((error) => {
//     console.error('There is an error', error); // Should log the error message after 2 seconds
// });


//.then can also capture the error, it can take 2 parameters, the first is the success case, the second is the error case
// function getNumberPromise() {
//     // Write your code here
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(10); 
//             reject("Error: Unable to fetch the number");
//         }, 2000);
//     });

//     return myPromise;


// const handleSuccess = (value) => {
//     console.log(value); // Should log 10 after 2 seconds
// }

// const handleFailure = (error) => {
//     console.error('There is an error'); // Should log the error message after 2 seconds
// }   
// getNumberPromise()
// .then(handleSuccess, handleFailure)


// const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 complete"), 1000));
// const task2 = () => new Promise((resolve) => setTimeout(() => resolve("Task 2 complete"), 1000));
// const task3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3 complete"), 1000));

// //.then returns a new promise, so we can chain them together
// // We can chain multiple promises together to run them sequentially
// // thenables
// // We can use the .then() method to handle the resolved value of the previous promise
// // We can also use .catch() to handle any errors that occur in the chain

// task1()
//   .then((result1) => {
//     console.log(result1);
//     return task2();
//   })
//   .then((result2) => {
//     console.log(result2);
//     return task3();
//   })
//   .then((result3) => {
//     console.log(result3);
//   })
//   .catch((error) => console.error("Error occurred:", error));

// We can also use async/await to handle promises in a more readable way
// async function runTasks() {
//   try {
//     const result1 = await task1();
//     console.log(result1);
//     const result2 = await task2();
//     console.log(result2);
//     const result3 = await task3();
//     console.log(result3);
//   } catch (error) {
//     console.error("Error occurred:", error);
//   }
// }
// runTasks();
// We can also use Promise.all() to run multiple promises in parallel
// Promise.all([task1(), task2(), task3()])
//   .then((results) => {
//     results.forEach((result) => console.log(result));
//   })
//   .catch((error) => console.error("Error occurred:", error));

// const fetchUser = () => Promise.resolve({ id: 1, name: "Alice" });
// const fetchUserPosts = (userId) => Promise.resolve(
//   [
//     { postId: 101, content: "Hello World" }, 
//     { postId: 102, content: "Learning JS" }
//   ]
// );

// fetchUser()
//   .then((user) => {
//     console.log(`User: ${user.name}`);
//     return fetchUserPosts(user.id);
//   })
//   .then((posts) => {
//     const formattedPosts = posts.map((post) => `Post ${post.postId}: ${post.content}`);
//     console.log(formattedPosts);
//   });


// Exercise 2: Chaining Promises

// // Returns a Promise that resolves with a string "Data retrieved" after 1 second

// function fetchData() {
//     // Write your code here
//     const fetchDataPromise = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve("Data retrieved"); 
//         }, 1000);
//     })
//     return fetchDataPromise;
// }

// // Takes the resolved value of fetchData as input, appends " and processed", 
// // and returns a Promise resolving with the new string after 2 seconds

// function processData(data){
//     // Write your code here
//     const processedData = data + " and processed";

//     const processDataPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(processedData);
//         }, 2000);
//     }); 
//     return processDataPromise;
// }


// // Takes the resolved value of processData as input and logs it to the console
// function displayData(data) {
//     // Write your code here
//     console.log(data);
// }

// // Chaining the functions
// fetchData()
//     .then((rawdata) => processData(rawdata)) // implicit return
//     .then((processedData) => displayData(processedData));

//  fetchData()
//     .then((rawdata) => {
//         return processData(rawdata)
//     }) // explicit return

// async / await - synthetic sugar for promises




// API

// fetch() is a built-in function in JavaScript that allows you to make network requests
// fetch(url, options)

// fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')
// .then((response) => {
//     return response.json()
// })
//     .then((data) => {console.log(data)
        
//     })

// const url = "https://www.alphavantage.co/query?" + 
//     "function=EARNINGS&Symbol=MSFT&apikey=WS4WQV5P790XAB6V";

// fetch(url)
// .then((response) => {
//     // if (!response.ok) {
//     //     throw new Error("Network response was not ok " + response.statusText);
//     // }
//     return response.json();
// })
// .then((earningsData) => {
//     console.log(earningsData);

//     //array of annual earnings
//     //each element in the array is an object with a fiscalDateEnding and reportedEPS property
//     const annualEarningsData = earningsData["qnnualEarnings"];
//     for (let i = 0; i< annualEarningsData.length; i++) {
//         const current = annualEarningsData[i];
//         if (current["fiscalDateEnding"] === "2020-06-30") {
//             console.log(current["reportedEPS"]);
//         }
//     }
// })



// Exercise 8: POST Request

//Given that the following URL accepts POST requests: 
//https://jsonplaceholder.typicode.com/posts

//POST the following JavaScript object to the URL:
// {
// 	ticker: 'APPL',
// 	name: 'Apple Inc',
// 	price: 171.48,
// }

const url = "https://jsonplaceholder.typicode.com/posts";
const payload = {
    ticker: 'APPL',
    name: 'Apple Inc',
    price: 171.48,
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
})  

.then((response) => {
   return response.json();
})
.then((data) => {
    console.log('Response from server:', data);
}) 



