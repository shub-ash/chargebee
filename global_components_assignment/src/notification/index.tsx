import React, { useState, useEffect } from "react";
import "./style.css";

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

export type NotificationProps = {
  message: string;
  onClose?: () => void;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  delay?: number;
  icon?: JSX.Element;
};

export const Notification = ({
  message,
  onClose,
  className = "",
  onMouseEnter,
  onMouseLeave,
  delay = 3000,
  icon,
}: NotificationProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (delay || onClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, onClose]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  return visible ? (
    <div
      className={`notification ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{message}</span>
      <span className="close-icon" onClick={handleClose}>
        {icon ? icon : "X"}
      </span>
    </div>
  ) : null;
};
