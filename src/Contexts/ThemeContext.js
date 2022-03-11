import React from "react";

export const initialThemeState = {
  theme: "light",
  color: "red",
  setTheme: () => null,
  setColor: () => null
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
