import React from "react";

function Input({
  inputType = "text",
  className = "",
  placeholder = "None",
  inputValue = "",
  setInputValue,
  inputDisapled = false,
  inputId = "inputField",
  label = inputId,
  labelClassName = "",
  readOnly = false,
  minRange = 0,
  maxRange = 100,
}) {
  return (
    <>
      <label htmlFor={inputId} className={`${labelClassName}`}>
        {label.toUpperCase()}
      </label>

      <input
        type={inputType}
        className={`${className}`}
        placeholder={placeholder}
        value={
          ["checkbox", "radio"].includes(inputType) ? undefined : inputValue
        }
        checked={
          ["checkbox", "radio"].includes(inputType) ? inputValue : undefined
        }
        onChange={(e) => {
          if (setInputValue) {
            const value = ["checkbox", "radio"].includes(inputType)
              ? e.target.checked
              : e.target.value;
            setInputValue(value);
          }
        }}
        id={inputId}
        disabled={inputDisapled}
        readOnly={readOnly}
        min={inputType === "range" ? minRange : undefined}
        max={inputType === "range" ? maxRange : undefined}
      />
    </>
  );
}

export default Input;
