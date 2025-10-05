import React from "react";


export type ButtonVariant = "primary" | "success" | "danger" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
      size?: ButtonSize;
      className?: string,
      children?: React.ReactNode;
      onClick?: () => void;
      type?: "button" | "reset" | "submit";
      disabled?: boolean,
      "ariaLabel"?: string,
      variant?: ButtonVariant;
}