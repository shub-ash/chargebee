import React from "react";
import "./style.css";

/**
 * Props for the Button component
 * @typedef {Object} ButtonProps
 * @property {string | JSX.Element} children - The content of the button.
 * @property {"primary" | "secondary"} [variant] - The variant of the button (optional).
 * @property {string} [className] - Additional CSS class names for styling (optional).
 * @property {(e: any) => void} [onClick] - The click event handler (optional).
 * @property {JSX.Element} [leftIcon] - The left icon element (optional).
 * @property {JSX.Element} [rightIcon] - The right icon element (optional).
 * @property {boolean} [disabled] - Specifies whether the button is disabled (optional).
 * @property {() => void} [onFocus] - The focus event handler (optional).
 * @property {() => void} [onBlur] - The blur event handler (optional).
 * @property {() => void} [onKeyDown] - The keydown event handler (optional).
 * @property {() => void} [onMouseEnter] - The mouse enter event handler (optional).
 * @property {() => void} [onMouseLeave] - The mouse leave event handler (optional).
 */

/**
 * Button component
 * @param {ButtonProps} props - The props for the Button component.
 * @returns {JSX.Element} Button component JSX
 */

export type ButtonProps = {
  children: string | JSX.Element;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: (e: any) => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean | undefined;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Button = ({
  children,
  className,
  variant,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
  onFocus,
  onBlur,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  const color = (variant: any) => {
    switch (variant) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      default:
        return "";
    }
  };
  return (
    <button
      className={`button ${color(variant)} ${className} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type="button"
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {leftIcon && <span className="icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </button>
  );
};
