import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrentChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountFormId = useId();
  return (
    <div className="flex justify-center align-middle px-1 py-2">
      <div className="flex flex-col justify-start">
        <label htmlFor={amountFormId}>{label}</label>
        <input
          id={amountFormId}
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>
      <div className="flex flex-col justify-end">
        <label htmlFor="">Currency Type</label>
        <select name="" id="">
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

export default InputBox;
