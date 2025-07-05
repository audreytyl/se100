import { useEffect, useState } from 'react'
import "./CurrencyStyling.css"
import CurrencyConverter from './CurrencyConverter'
import CurrencyContext from './CurrencyContext';

const CurrencyDropdown = () => {
    const contextValue = CurrencyContext;
    const [fromCurrency, setFromCurrency] = useState("AED")
    const [toCurrency, setToCurrency] = useState("AED")
    
    const fakeResponseData = {
        supported_codes: [
            ["AED", "UAE Dirham"],
            ["CAD", "Canadian Dollar"],
            ["USD", "United States Dollar"],
            ["NZD", "New Zealand Dollar"],
            ["SGD", "Singapore Dollar"]
        ]
    }
    useEffect(() => {
        // fetch("https://v6.exchangerate-api.com/v6/80eefd8a8a81d7b44915e930/codes")
        // .then((response) => {
        //     return response.json()
        // })
        // .then((data) => {
        //     setCurrencyList(data.supported_codes)
        // })

        // simulate API request, to overcome API fetches issue
        setCurrencyList(fakeResponseData.supported_codes)
    }, [])

    const [currencyList, setCurrencyList] = useState([])
    // const [fromCurrency, setFromCurrency] = useState("AED")
    // const [toCurrency, setToCurrency] = useState("AED")

    const renderDropdownOptions = () => {
        return currencyList.map((currencyArray) => {
            return (
                <option value={currencyArray[0]}>{currencyArray[1]}</option>
            )
        })
    }

    //these handler functions never change, so we do not need to re-render, can use callback here but no need since this part isnt what slow us down
    const handleSelectFromCurrency = (e) => {
        setFromCurrency(e.target.value)
    }

    const handleSelectToCurrency = (e) => {
        setToCurrency(e.target.value)
    }

    return (
        <div>
            <div class="container">
                <p>I want to convert</p>
                <select 
                    name="currency" 
                    id="currencySelect"
                    onChange={handleSelectFromCurrency}
                >
                    {renderDropdownOptions()}
                </select>
                <p>to</p>
                <select 
                    name="currency" 
                    id="currencySelect"
                    onChange={handleSelectToCurrency}                  
                >
                    {renderDropdownOptions()}
                </select>
            </div>
            <CurrencyConverter
                // fromCurrency={fromCurrency}
                // toCurrency={toCurrency}
            />
        </div>
    )
}

export default CurrencyDropdown