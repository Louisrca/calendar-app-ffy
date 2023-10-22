import { useState } from "react";

export const useHandleColorChange = () => {
  const [color, setColor] = useState("rgba(98, 0, 238, 1)");
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(98, 0, 238, 0.15)"
  );
  const handleColorChange = (e: any) => {
    const hexColor = e.target.value;
    const hexBackgroundColor = e.target.value;
    const rgbaColor = hexToRGBAColor(hexColor);
    const rgbaBackgroundColor = hexToRGBABackgroundColor(hexBackgroundColor);
    setColor(rgbaColor);
    setBackgroundColor(rgbaBackgroundColor);
  };
  const hexToRGBAColor = (hex: string) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  const hexToRGBABackgroundColor = (hex: string) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.15)`;
  };

  return { handleColorChange, color, backgroundColor };
};
