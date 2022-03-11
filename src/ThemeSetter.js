import React, { useContext } from "react";

import ThemeContext from "./Contexts/ThemeContext";

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { color, setColor } = useContext(ThemeContext);

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
        {themeOptions.map((option, idx) => (
          <option value={option.value} key={idx}>
            {option.value}
          </option>
        ))}
      </select>
      <select value={color} onChange={(e) => setColor(e.currentTarget.value)}>
        {colorOptions.map((option, idx) => (
          <option value={option.value} key={idx}>
            {option.value}
          </option>
        ))}
      </select>
    </div>

  );
}

const themeOptions = [{ value: "light" }, { value: "dark" }];
const colorOptions = [{ value: "red" }, { value: "blue" }, { value: "origin" }];
