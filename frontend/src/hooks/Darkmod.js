import { useEffect, useState } from 'react';

function useDarkmod() {

    const [theme, setTheme] = useState("light");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {

        const root = document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}

export default useDarkmod;
