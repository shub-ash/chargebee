import React from "react";
import "./style.css";

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

export type BadgeType = {
  text?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Badge = ({
  text,
  color,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: BadgeType) => {
  const badgeClasses = `badge ${
    color === "primary"
      ? "badge-primary"
      : color === "secondary"
      ? "badge-secondary"
      : color === "success"
      ? "badge-success"
      : color === "danger"
      ? "badge-danger"
      : color === "warning"
      ? "badge-warning"
      : ""
  }`;
  return (
    <>
      <span
        className={`${badgeClasses} ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </span>
    </>
  );
};
