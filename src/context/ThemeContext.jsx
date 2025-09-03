import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    mode: "dark",
    lightMode: () => {},
    darkMode: () => {}
}); 

export default function ThemeContextProvider(props) {

    const [mode, setMode] = useState("dark");

    const lightMode = () => {
        setMode("light");
    }

    const darkMode = () => {
        setMode("dark");
    }

    useEffect(() => {
        const html = document.querySelector("html");
        html.classList.remove("dark", "light");
        html.classList.add(mode);
    }, [mode]);

    return (
        <ThemeContext.Provider value={{mode, lightMode, darkMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
