import React from "react";

function Select({
  className = "",
  selectValue = "",
  setSelectValue,
  selectDisabled = false,
  // Accepts an array of objects: { value, label }
  selectOptions = [],
}) {
  selectOptions = [{ value: "", label: "selectValue" }, ...selectOptions];

  return (
    <select
      className={`${className}`}
      value={selectValue}
      onChange={(e) => setSelectValue && setSelectValue(e.target.value)}
      disabled={selectDisabled}
    >
      {selectOptions.map(
        (
          option // 🔹 Use "option" instead of "options"
        ) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      )}
    </select>
  );
}

export default Select;
