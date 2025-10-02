import React from "react";

export type ButtonProps = {
      className?: string,
      children?: React.ReactNode;
      onClick?: () => void;
      type?: "button" | "reset" | "submit";
      disabled?: boolean,
      "ariaLabel"?: string,
}