import { useState } from "react";
import InputBox from "./components/InputBox";
import UseCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  // jo user enter karaay ga input field ka andaar wo value amount ko assign hogee (see InputBox.jsx)
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("pkr");
  const [ConvertedAmount, setConvertedAmount] = useState("");

  const CurrencyInfo = UseCurrencyInfo(from);
  let options = Object.keys(CurrencyInfo);

  //swap functionality
  const swap = () => {
    setFrom(to);
    setAmount(ConvertedAmount);
    setTo(from);
    setConvertedAmount(amount);
  };

  //convert functionality
  const convert = () => {
    if (amount !== "") {
      setConvertedAmount(amount * CurrencyInfo[to]);
    }
  };

  return (
    //Main div with backgound pic
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1651340981821-b519ad14da7c?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycmVuY3klMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D')`,
        backgroundSize: "cover",
      }}
    >
      {/* Child div */}
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              {/* "From Inputbox" */}

              <InputBox
                label="From"
                text="Amount"
                currencyOptions={options}
                amount={amount}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              {/* Swap button */}
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              {/* "To Inputbox" */}
              <InputBox
                label="To"
                text="Your Converted Amount"
                currencyOptions={options}
                amount={ConvertedAmount}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            {/* Convert button */}
            {/* called convert() above during "form" submission */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
