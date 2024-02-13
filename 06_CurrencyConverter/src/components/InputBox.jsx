import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  text = "",
}) {
  const AmountInputId = useId();

  return (
    <div
      className={`bg-white text-black p-3 rounded-lg text-sm flex ${className} `}
    >
      <div className="w-1/2">
        <label
          htmlFor={AmountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={AmountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="text"
          placeholder={text}
          disabled={amountDisable}
          // jo user enter karaay ga input field ka andaar wo value amount ko assign hogee
          value={amount}
          //AND operator (&&) use kar kaay aik kisam ka "check" lgya hai
          // kaay agar koi value is function mai pass na hoo tooh ya crash na kar jaiy
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          //yahan par dobara haam Number() use kar rahay hain keu kaay "JS" taqreeban har
          // baar events kaay andar value ko "string" mai laay leti hai , aur ya BUG ki wjh ban jata hai
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/*Through loop we are inserting all options inside select tag */}

          {currencyOptions.map((currency) => (
            <option
              key={currency} //must use keys for better performance in react while looping
              value={currency}
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
