import { useId } from "react";
import PropTypes from "prop-types";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountFormId = useId();
  return (
    <div className="flex justify-center items-center gap-6 p-8 shadow-md bg-slate-100 rounded-lg">
      <div className="flex flex-col gap-3 text-slate-800 justify-start">
        <label htmlFor={amountFormId} className="font-medium">
          {label}
        </label>
        <input
          id={amountFormId}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
          className="py-1  bg-slate-300 text-black ps-3 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex flex-col gap-3 text-slate-800 justify-end">
        <label className="font-medium">Currency Type</label>
        <select
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectCurrency}
          disabled={currencyDisable}
          className="py-1.5 bg-gray-900 text-white ps-3 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        >
          {currencyOptions &&
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
InputBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
};

export default InputBox;
