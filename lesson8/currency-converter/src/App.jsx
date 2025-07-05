import { useState } from 'react';
import './App.css'
import CurrencyDropdown from './CurrencyDropdown';
import CurrencyConverter from './CurrencyConverter';
import CurrencyContext from './CurrencyContext';


function App() {
    const [fromCurrency, setFromCurrency] = useState("AED")
    const [toCurrency, setToCurrency] = useState("AED")
  // shorthand, array destructuring
  // const useStateResult = useState(0);
  // const count = useStateResult[0];
  // const setCount = useStateResult[1];

  //whenever this state changes, react will re-render the component
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  return (
    <>
    <CurrencyContext.Provider value={{
      fromCurrency,
      setFromCurrency,
      toCurrency,
      setToCurrency
    }}>
      <h1>Currency Converter</h1>
      <CurrencyDropdown/>
    </CurrencyContext.Provider>
    </>
  )
}




export default App;
