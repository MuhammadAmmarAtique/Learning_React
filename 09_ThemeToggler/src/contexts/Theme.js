import { createContext,useContext } from "react";

//jab context pahli baar bnaay ga tooh us ka andar values by default present hongee as a "object".
export const ThemeContext = createContext({
     themeMode: "light",
     darkMode: () => {},
     lightMode: () => {},
    });

//same hee file mai context aur uska provider bna lia ha
export const ThemeProvider = ThemeContext.Provider;    

//exporting cutom hook (useTheme) so we can use variables defined in ThemeContext anywhere
export default function useTheme() {
    return useContext(ThemeContext)
}