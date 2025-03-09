import React, { useState, useCallback } from "react";
import "./App.css";
import { Input, Select } from "./component/Component";
import useFetching from "./hooks/Fetchinghook";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [calAmount, setCalAmount] = useState(0);

  const { data: rates, error, loading } = useFetching(from); // Using Custom Hooks

  // Convert fetched rates into dropdown format
  const options = rates
    ? Object.keys(rates).map((currency) => ({
        value: currency,
        label: currency.toUpperCase(),
      }))
    : [];

  // Calculate converted amount
  const calculate = useCallback(() => {
    if (rates && rates[to]) {
      setCalAmount(amount * rates[to]);
    }
  }, [amount, from, to, rates]);

  // Swap currency logic
  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(calAmount);
    setCalAmount(amount);
  };

  return (
    <section className="w-screen h-screen bg-gray-200 flex justify-center items-center ">
      <form
        className="w-3/4 justify-items-center text-black-500"
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
      >
        <div className="flex flex-col w-2/3 min-w-max max-w-screen-md shadow-md rounded-2xl px-14 py-3 bg-gray-800 ">
          <h1 className="text-white text-center my-9 text-3xl">
            Currency Converter
          </h1>

          <div className="flex bg-gray-200 w-full rounded-xl justify-between">
            <div className="flex flex-col">
              <Input
                inputType="number"
                className="outline-1 w-fit bg-transparent bg-slate-100 m-4 mb-8"
                placeholder="Amount"
                inputValue={amount}
                setInputValue={(amount) => setAmount(amount)}
                inputId="number"
                labelClassName="my-4 ml-4 text-lg font-medium"
                label={from}
              />
            </div>
            <div className="flex flex-col h-fill text-lg mr-4">
              <span className="my-4 m-4 font-medium">Currency Type</span>
              <Select
                className="w-full text-right outline-none mt-4 bg-slate-100 rounded-xl"
                selectValue={from}
                setSelectValue={(form) => setFrom(form)}
                selectOptions={options}
              />
            </div>
          </div>

          <button
            className="text-xl text-white px-4 py-1 bg-blue-700 rounded-3xl uppercase mx-auto my-6"
            onClick={swap}
          >
            Swap
          </button>

          <div className="flex bg-gray-200 w-full rounded-xl justify-between">
            <div className="flex flex-col">
              <Input
                inputType="number"
                className="outline-none w-fit bg-transparent bg-slate-100 m-4 mb-8"
                placeholder={`Converted ${from}`}
                inputValue={calAmount}
                inputId="number"
                inputDisapled={true}
                labelClassName="my-4 ml-4 text-lg font-medium"
                label={to}
              />
            </div>
            <div className="flex flex-col h-fill text-lg mr-4">
              <span className="my-4 m-4 font-medium">Currency Type</span>
              <Select
                className="w-full text-right outline-none mt-4 bg-slate-100 rounded-xl"
                selectValue={to}
                setSelectValue={(to) => setTo(to)}
                selectOptions={options}
              />
            </div>
          </div>

          <button
            className="text-xl text-white mt-12 px-6 py-3 bg-blue-700 rounded-3xl mx-auto"
            onClick={calculate}
          >
            Convert {from} to {to}
          </button>

          <div className="w-full justify-self-center mx-2 mb-3 mt-4 h-8 ">
            {loading && <p className="text-white text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && (
              <span className="opacity-0">Placeholder</span>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

export default App;
