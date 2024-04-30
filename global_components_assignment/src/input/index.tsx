import React from "react";
import "./style.css";

/**
 * @typedef {Object} InputProps - Props for the Input component.
 * @property {string} [type="text"] - The type of the input element (optional, default is "text").
 * @property {number} [maxlength] - The maximum number of characters allowed in the input (optional).
 * @property {number} [minlength] - The minimum number of characters required in the input (optional).
 * @property {string} [placeholder] - The placeholder text for the input (optional).
 * @property {string} [name] - The name of the input element (optional).
 * @property {string} [value] - The value of the input element (optional).
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - The change event handler for the input (optional).
 * @property {boolean} [disabled] - Specifies whether the input element is disabled (optional).
 * @property {string} [className] - Additional CSS class names for styling (optional).
 * @property {string} [min] - The minimum value allowed for numeric inputs (optional).
 * @property {string} [max] - The maximum value allowed for numeric inputs (optional).
 * @property {() => void} [onFocus] - The focus event handler for the input (optional).
 * @property {() => void} [onBlur] - The blur event handler for the input (optional).
 * @property {() => void} [onKeyDown] - The keydown event handler for the input (optional).
 * @property {() => void} [onKeyPress] - The keypress event handler for the input (optional).
 */

/**
 * Input component
 * @param {InputProps} props - The props for the Input component.
 * @returns {JSX.Element} Input component JSX
 */

type InputProps = {
  type?: string;
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  min?: string;
  max?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: () => void;
  onKeyPress?: () => void;
};

export const Input = ({
  type = "text",
  min,
  max,
  maxlength,
  minlength,
  placeholder,
  name,
  value,
  onChange,
  disabled,
  className,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
}: InputProps) => {
  return (
    <input
      className={`input ${className}`}
      type={type}
      min={min}
      max={max}
      maxLength={maxlength}
      minLength={minlength}
      placeholder={placeholder}
      name={name}
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
    />
  );
};
