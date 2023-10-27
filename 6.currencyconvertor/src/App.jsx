import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const handelCurrencyConvert = () => {
    console.log(amount, from, " -> ", to, currencyInfo[to]);
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <h1>Currency converter</h1>
        <div className="flex flex-col items-center bg-slate-300 bg-opacity-80 rounded-lg p-6 mt-6">
          <div>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
          </div>
          <button
            className="px-3 py-1 -mt-2 -mb-2 z-50 shadow-lg bg-blue-600 rounded-md "
            onClick={swap}
          >
            swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
          <button
            className="px-3 py-1 mt-4 z-50 shadow-lg bg-blue-600 rounded-md "
            onClick={handelCurrencyConvert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
