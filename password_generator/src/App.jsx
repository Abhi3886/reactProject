import React, { useState, useCallback, useMemo } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [minlength, setMinLength] = useState(8);
  const [maxlength, setMaxLength] = useState(100);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  const characterSet = useMemo(() => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const specialChar = "@#$%&!~()_+^*";
    let str = lowerCase + lowerCase.toUpperCase();

    if (numberAllowed) str += number;
    if (specialCharAllowed) str += specialChar;

    return str;
  }, [numberAllowed, specialCharAllowed]);

  const passwordGenerator = useCallback(() => {
    let pass = Array.from(
      { length },
      () => characterSet[Math.floor(Math.random() * characterSet.length)]
    ).join("");
    if (pass.charAt(0) === "0") pass = characterSet.charAt(1) + pass.slice(1);
    setPassword(pass);
  }, [length, characterSet]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <section className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full h-full max-h-96 max-w-4xl shadow-md rounded-2xl px-6 py-6 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-9 text-3xl">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mx-3 mb-10">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="Password"
            readOnly
          />
          <button
            className="bg-blue-700 text-white px-3 py-0.5"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-md justify-around mb-6 text-white text-base uppercase">
          <div className="flex flex gap-x-4">
            <input
              type="range"
              min={minlength}
              max={maxlength}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              className="cursor-pointer mr-2"
              defaultChecked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label>Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              className="cursor-pointer mr-2"
              defaultChecked={specialCharAllowed}
              onChange={(e) => setSpecialCharAllowed(e.target.checked)}
            />
            <label>Special Character</label>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="text-xl text-white mb-9 px-4 py-2 bg-blue-700 rounded-3xl"
            onClick={passwordGenerator}
          >
            Generate
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
