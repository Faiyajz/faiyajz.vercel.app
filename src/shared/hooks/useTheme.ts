import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

export const useTheme = () => {
    const [theme, setTheme] = useState<ThemeMode>("light");
    const [systemTheme, setSystemTheme] = useState<ThemeMode>("light");

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        const updateSystemTheme = () => {
            setSystemTheme(media.matches ? "dark" : "light");
        };

        updateSystemTheme(); // initial sync
        media.addEventListener("change", updateSystemTheme);

        return () => media.removeEventListener("change", updateSystemTheme);
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
    const applySystemTheme = () => setTheme(systemTheme);

    return { theme, systemTheme, toggleTheme, applySystemTheme };
};
