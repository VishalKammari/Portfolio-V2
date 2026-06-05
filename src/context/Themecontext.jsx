import { createContext, useState, useEffect } from "react";

export const Themecontext = createContext();

export const Themeprovider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved === "light" || saved === "dark") return saved;
            
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return systemPrefersDark ? "dark" : "light";
        }
        return "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggletheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <Themecontext.Provider value={{ theme, toggletheme }}>
            {children}
        </Themecontext.Provider>
    );
};
