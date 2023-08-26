import { createContext, useContext, useReducer, useEffect } from "react";
import ThemeReducer from "./themeReducer"

export const ThemeContext = createContext()
const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || {primary: 'color-1', background: 'bg-1'}

export function ThmeProvide({children}) {
  const [themeState, dispatchTheme ] = useReducer(ThemeReducer, initialThemeState);
  
  const themeHandler = (buttonClassName) => {
    dispatchTheme({type: buttonClassName})
  }
  
  // save theme settings to local storage
  useEffect(() => {
    localStorage.setItem('themeSettings', JSON.stringify(themeState))
  })

  return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}