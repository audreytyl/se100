import { use } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const selectElement = document.getElementById('currencySelect');
    selectElement.value = 'usd'; // Set default value to USD
  }, []);

  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value.toUpperCase();
    alert(`You selected: ${selectedValue}`);
  };

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect" onChange={handleCurrencyChange}>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
    </>
  )
}

export default App;
