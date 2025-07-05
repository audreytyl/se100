// src/contexts/CurrencyContext.js
// This file creates a context for managing currency-related state in a React application.
// It uses the `createContext` function from React to create a context object named `MyContext`.
// This context can be used to provide and consume currency-related data throughout the component tree.


import { createContext } from 'react';

const CurrencyContext = createContext();

export default CurrencyContext;

