"use client"

const { createContext, useState } = require("react")

export const themeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => prev === "dark" ? "light" : "dark")
    }

    return (
        <themeContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </themeContext.Provider>
    )
}

