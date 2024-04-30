import React from 'react';

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
type ButtonProps = {
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
declare const Button: ({ children, className, variant, onClick, leftIcon, rightIcon, disabled, onFocus, onBlur, onKeyDown, onMouseEnter, onMouseLeave, }: ButtonProps) => React.JSX.Element;

/**
 * @typedef {Object} BadgeType - Props for the Badge component.
 * @property {string} [text] - The text content of the badge (optional).
 * @property {string} [color] - The color of the badge (optional).
 * @property {string} [className] - Additional CSS class names for styling (optional).
 * @property {() => void} [onClick] - The click event handler for the badge (optional).
 * @property {() => void} [onMouseEnter] - The mouse enter event handler for the badge (optional).
 * @property {() => void} [onMouseLeave] - The mouse leave event handler for the badge (optional).
 */
/**
 * Badge component
 * @param {BadgeType} props - The props for the Badge component.
 * @returns {JSX.Element} Badge component JSX
 */
type BadgeType = {
    text?: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning";
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
declare const Badge: ({ text, color, className, onClick, onMouseEnter, onMouseLeave, }: BadgeType) => React.JSX.Element;

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
declare const Checkbox: ({ name, value, onChange, disabled, className, checked, label, onMouseEnter, onMouseLeave, }: CheckboxProps) => React.JSX.Element;

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
declare const Input: ({ type, min, max, maxlength, minlength, placeholder, name, value, onChange, disabled, className, onFocus, onBlur, onKeyDown, onKeyPress, }: InputProps) => React.JSX.Element;

/**
 * @typedef {Object} NotificationProps - Props for the Notification component.
 * @property {string} message - The notification message.
 * @property {() => void} [onClose] - The function to call when the notification is closed (optional).
 * @property {string} [className] - Additional CSS class names for styling (optional).
 * @property {() => void} [onMouseEnter] - The mouse enter event handler for the notification (optional).
 * @property {() => void} [onMouseLeave] - The mouse leave event handler for the notification (optional).
 * @property {number} [delay] - The delay in milliseconds before the notification disappears (optional).
 * @property {JSX.Element} [icon] - The icon element to display in the notification (optional).
 */
/**
 * Notification component
 * @param {NotificationProps} props - The props for the Notification component.
 * @returns {JSX.Element} Notification component JSX
 */
type NotificationProps = {
    message: string;
    onClose?: () => void;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    delay?: number;
    icon?: JSX.Element;
};
declare const Notification: ({ message, onClose, className, onMouseEnter, onMouseLeave, delay, icon, }: NotificationProps) => React.JSX.Element | null;

export { Badge, type BadgeType, Button, type ButtonProps, Checkbox, Input, Notification, type NotificationProps };
