import CurrencyContext from "./CurrencyContext";
import "./CurrencyStyling.css"
import { useContext, useEffect, useState} from 'react';


const CurrencyConverter = (props) => {
    // const { fromCurrency, toCurrency } = props;
    const contextValue = useContext(CurrencyContext);
    const {fromCurrency, toCurrency} = contextValue;
    const [fromAmount, setFromAmount] = useState(1);
    const [toAmount, setToAmount] = useState(2);
    

    useEffect(() => {

    //     fetch(`https://v6.exchangerate-api.com/v6/80eefd8a8a81d7b44915e930/pair/${fromCurrency}/${toCurrency}/${fromAmount}`)
    //         .then((response) => {
    //             return response.json();
    //         }
    //         )
    //         .then((data) => {
    //             setToAmount(data.conversion_rate * fromAmount);
    //         }
    //         )
    //         .catch((error) => {
    //             console.error("Error fetching conversion rate:", error);
    //         });
    // }, [fromCurrency, toCurrency, fromAmount]);

     setToAmount(fromAmount * 2); // Assuming a fixed conversion rate of 2 for simplicity
    // This is a placeholder for the conversion logic, replace with actual API call
    }, [fromCurrency, toCurrency, fromAmount]);

    return (
        <div className="container">
            <input
                value={fromAmount}
                placeholder="Enter amount"
                className = "converter-input"
                onChange={(e) => {
                    setFromAmount(e.target.value);

                    setToAmount(e.target.value * 2); // Assuming a fixed conversion rate of 2 for simplicity
                }}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p className="container-result">{toAmount}</p>
            <p>{toCurrency}</p>
        </div>
    );
}   


export default CurrencyConverter;