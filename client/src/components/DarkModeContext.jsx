import React, {createContext, useState} from 'react';
import { useEffect } from 'react';

const DarkModeContext = createContext();

const blue = getComputedStyle(document.documentElement).getPropertyValue('--blue');
const white = getComputedStyle(document.documentElement).getPropertyValue('--white');
const green = getComputedStyle(document.documentElement).getPropertyValue('--white');

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

/*
const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
*/

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() =>{
        return getStorageValue("darkMode", "");
    });

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode, setDarkMode]);
    
    return [darkMode, setDarkMode];
}

export {DarkModeContext, useDarkMode, blue, white, green};