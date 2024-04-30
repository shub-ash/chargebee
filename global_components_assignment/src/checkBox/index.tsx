import React from "react";
import "./style.css";

/**
 * @typedef {Object} CheckboxProps - Props for the Checkbox component.
 * @property {string} name - The name of the checkbox input.
 * @property {string} [value] - The value of the checkbox input (optional).
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - The change event handler for the checkbox input (optional).
 * @property {boolean} [disabled] - Specifies whether the checkbox is disabled (optional).
 * @property {string} [className] - Additional CSS class names for styling (optional).
 * @property {boolean} [checked] - Specifies whether the checkbox is checked (optional).
 * @property {string} label - The label text for the checkbox.
 * @property {() => void} [onMouseEnter] - The mouse enter event handler (optional).
 * @property {() => void} [onMouseLeave] - The mouse leave event handler (optional).
 */

/**
 * Checkbox component
 * @param {CheckboxProps} props - The props for the Checkbox component.
 * @returns {JSX.Element} Checkbox component JSX
 */

type CheckboxProps = {
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  label: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Checkbox = ({
  name,
  value,
  onChange,
  disabled,
  className,
  checked,
  label,
  onMouseEnter,
  onMouseLeave,
}: CheckboxProps) => {
  return (
    <div className={`checkbox-container ${className}`}>
      <input
        className="checkbox-input"
        type="checkbox"
        name={name}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div className="checkbox-label">{label}</div>
    </div>
  );
};
