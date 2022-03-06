import { useState } from "react";

const hasWindow = () => typeof window !== "undefined";

const getLocalStorageValue = (key, initialValue) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

const setLocalStorageValue = (key, newValue) =>
  hasWindow() && localStorage.setItem(key, JSON.stringify(newValue));

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    hasWindow() ? getLocalStorageValue(key, initialValue) : initialValue
  );

  const setValue = (value) => {
    const newValue = value instanceof Function ? value(storedValue) : value;
    setStoredValue(newValue);
    setLocalStorageValue(key, newValue);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
