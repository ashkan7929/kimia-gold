import * as React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import type { SegmentedButtonsProps } from "../../types";


const SegmentedButtons = ({
  className = "",
  buttons,
  defaultIndex = 0,
  onChange,
}: SegmentedButtonsProps) => {
  const [index, setIndex] = React.useState(defaultIndex);

  const handleChange = (_: any, newValue: number | null) => {
    if (newValue === null) return; 
    setIndex(newValue);
    onChange?.(newValue, buttons[newValue].label);
  };

  return (
    <ToggleButtonGroup
      exclusive
      value={index}
      onChange={handleChange}
      className={className}
      sx={{
        direction: "center",
        borderRadius: 1,
        border: "none",
        // borderColor: (t) => (t.palette.mode === "dark" ? "#fff" : "#fff"),
        "& .MuiToggleButton-root": {
          flex: 1,
          py: 1,
          fontFamily: "peyda, sans-serif",
          fontWeight: 500,
          // border: "1px solid",
          // borderColor: (t) => (t.palette.mode === "dark" ? "#000" : "#fff"),
          textWrap: "nowrap",
          backgroundColor: (t) =>
            t.palette.mode === "dark" ? "#111827" : "#F9FAFB",
          color: (t) => (t.palette.mode === "dark" ? "#fff" : "#000"),
          "&:hover": {
            backgroundColor: (t) =>
              t.palette.mode === "dark" ? "#0B1220" : "#F3F4F6",
          },
          "&.Mui-selected": {
            backgroundColor: (t) =>
                t.palette.mode === "dark" ? "#02006c " : "#2256ff ",
            color: "#fff",
           
            "&:hover": {
              backgroundColor: (t) =>
                t.palette.mode === "dark" ? "#02006c " : "#2256ff ",
            },
          },
          "&:first-of-type": { borderTopRightRadius: 12,},
          "&:last-of-type": {
            borderRight: "none",
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
          },
        },
      }}
    >
      {buttons.map((b, i) => (
        <ToggleButton key={i} value={i}>
          {b.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default SegmentedButtons;
