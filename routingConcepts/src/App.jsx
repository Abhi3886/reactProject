import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import { Input, Select } from "./component/Component";

function App() {
  return (
    <section className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full h-full max-h-96 max-w-4xl shadow-md rounded-2xl px-6 py-6 bg-gray-800 text-orange-500"></div>
    </section>
  );
}

export default App;
