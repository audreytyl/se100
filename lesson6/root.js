const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
// root.render(<App />)
// root.render(
//   <>
//     <p>Welcome Messages</p>
//     <ul>
//         <li>Welcome Tom from Singapore</li>
//         <li>Welcome Jerry from Malaysia</li>
//         <li>Welcome Sarah from Indonesia</li>
//     </ul>
//   </>
// );


//React components are functions that you can call within JSX and they return 1 element
//React components can be nested within each other
//React components must be capitalized


// React Composition
// function Header() {
//     return <p>Welcome Message</p>
// }

// function Paragraph() {
//     return <ul>
//         <li>Welcome Tom from Singapore</li>
//         <li>Welcome Jerry from Malaysia</li>
//         <li>Welcome Sarah from Indonesia</li>
//     </ul>
// }

// function Footer() {
//     return <p>This is a footer</p>
// }

// function App() {
//     return <div>
//         <Header />
//         <Paragraph />
//         <Footer />
//     </div>
// }


// React Props

// function WelcomeMessagesTitle() {
//   return <p>Welcome Messages</p>
// }

// function WelcomeMessage(props) {
//   return <li>Welcome {props.name} from {props.country}</li>
// }


// function WelcomeMessagesList() {
//   return <ul>
//     <WelcomeMessage name="Tom" country="Singapore" />
//     <WelcomeMessage name="Jerry" country="Malaysia" />      
//     <WelcomeMessage name="Sarah" country="Indonesia" />       
  
//   </ul>
// }

// function WelcomeMessagesSection() {
//   return <div>
//     <WelcomeMessagesTitle />
//     <WelcomeMessagesList />
//   </div>
// }

// function App() {
//   return <div>
//     <WelcomeMessagesSection />
//   </div>
// }


// .map()

// let numbers = [1, 2, 3];
// let doubled = [];

// for (let i = 0; i < numbers.length; i++) {
//     doubled.push(numbers[i] * 2);
// }

// console.log(doubled); // Output: [2, 4, 6]

// // simplified using .map()

// let numbers = [1, 2, 3];
// let doubled = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubled); // Output: [2, 4, 6]


// can pass in additional parameters 'index'
// let numbers = [1, 2, 3];
// let doubled = numbers.map(function(number, index) {

//     console.log(`Index: ${index}, Number: ${number}`);
//     return number * 2;
// });

// console.log(doubled); // Output: [2, 4, 6]


//Extracting Data from an Array of Objects
// let people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Carol', age: 35 }
// ];

// // return new array, dont use the orignal array
// let names = people.map(person => person.name);

// console.log(names); // Output: ['Alice', 'Bob', 'Carol']


//filter
// let numbers = [1, 2, 3,50,99,4]

// let smallNumbers = numbers.filter(function(number) {
//     return number < 10;
// })

// console.log(smallNumbers); 


//Exercise 4
// const strings = ['hello', 'world', 'javascript'];

// const lengths = strings.map(function(str) {
//     return str.length;
// });

// console.log(lengths); // Output: [5, 5, 10]



//Exercise 5
// const names = [['John', 'Doe'], ['Jane', 'Doe']];

// const fullNames = names.map(function(name) {
//     return name.join(' ');
// })

// console.log(fullNames); // Output: ['John Doe', 'Jane Doe']



//Exercise 6

// const users = [
//     { name: 'Tom', country: 'Singapore' },
//     { name: 'Jerry', country: 'Malaysia' },
//     { name: 'Sarah', country: 'Indonesia' }
// ];

// function WelcomeMessages(props) {
//     return <li>Welcome {props.name} from {props.country}</li>;
// }

// const WelcomeMessagesList = () => {
//     return <ul>
//     {
//         users.map(function(userDetails) {
//             return <WelcomeMessages
//                 name={userDetails.name}
//                 country={userDetails.country}
//                 key={userDetails.name + userDetails.country} // Unique key for each element
//             />
//         })
//     }
//     </ul>;
// } 

// const WelcomeMessagesSection = () => {
//     return <div>
//         <p>Welcome Messages</p>
//         <WelcomeMessagesList />
//     </div>;
// }

// const App = () => {
//     return <div>
//         <WelcomeMessagesSection />
//     </div>;
// }

// root.render(<App />);

// // #1 Traditional if else
// function MyComponent(props) {
//   if (props.isLoggedIn) {
//     return <UserDashboard />;
//   } else {
//     return <LoginScreen />;
//   }
// }


// // #2 Ternary operator
// function MyComponent(props) {
//   return props.isLoggedIn ? <UserDashboard /> : <LoginScreen />;
// }

// // #3 Logical AND operator

// function MyComponent(props) {
//   return props.isLoggedIn && <UserDashboard />;
// }

// //#4 Using element variables
// function MyComponent(props) {
//   let componentToRender;

//   if (props.isLoggedIn) {
//     componentToRender = <UserDashboard />;
//   } else {
//     componentToRender = <LoginScreen />;
//   }

//   return componentToRender;
// }

// //#5 using .map(0 function)
// function MyComponent(props) {
//   return (
//     <ul>
//       {props.items.map(item => {
//         if (item.isVisible) {
//           return <li key={item.id}>{item.name}</li>;
//         }
//         return null;
//       })}
//     </ul>
//   );
// }

// // #6 Using a switch statement
// function MyComponent(props) {
//   let content;

//   switch (props.status) {
//     case 'loading':
//       content = <LoadingSpinner />;
//       break;
//     case 'error':
//       content = <ErrorMessage />;
//       break;
//     case 'success':
//       content = <DataDisplay />;
//       break;
//     default:
//       content = <DefaultMessage />;
//   }

//   return <div>{content}</div>;
// }

// Exercise 7

// const age = 20;
// const beverage = age >= 18 ? 'Beer' : 'Juice';
// console.log(beverage); // 'Beer' if age is 18 or more, 'Juice' otherwise


// Exercise 8

// const users = [
//   { name: 'Tom', country: 'Singapore' },
//   { name: 'Jerry', country: 'Malaysia' },
//   { name: 'Sarah', country: 'Indonesia' }
// ];

// function WelcomeMessagesTitle() {
//   return <p>Welcome Messages</p>
// }

// function WelcomeMessage(props) {
//   return <li>Welcome {props.name} from {props.country}</li>
// }

// function WelcomeMessagesList() {
//   return <ul>
//     {
//       users.map(user => user.country === 'Singapore' ?
//         <li>Majulah Singapura, {user.name}</li> :
//         <WelcomeMessage key={user.name} name={user.name} country={user.country} 
//     />
//       )
//     }
//   </ul>
// }

// function WelcomeMessagesSection() {
//   return <div>
//     <WelcomeMessagesTitle />
//     <WelcomeMessagesList />
//   </div>
// }

// function App() {
//   return <div>
//     <WelcomeMessagesSection />
//   </div>
// }

// root.render(<App />)


// Exercise 9

// root.js

const users = [
  { name: 'Tom', country: 'Singapore' },
  { name: 'Jerry', country: 'Malaysia' },
  { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessagesTitle() {
  return <p>Welcome Messages</p>
}

function WelcomeMessage(props) {
  return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList() {
  return <ul>
    {
      users.map(user => 
       <> 
        {user.country} === 'Singapore' && <li>Majulah Singapura, {user.name}</li>
        <WelcomeMessage key={user.name} name={user.name} country={user.country} 
        />
        </>
      )
    }
  </ul>
}


function WelcomeMessagesSection() {
  return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
  </div>
}

function App() {
  return <div>
    <WelcomeMessagesSection />
  </div>
}

root.render(<App />)