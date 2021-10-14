import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue = "") => {
  const [value, setValue] = useState<string>(
    window.localStorage.getItem(key) ?? defaultValue,
  );

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      const { key: updateInKey, newValue } = e;

      if (updateInKey === null || newValue === null) {
        return;
      }

      if (updateInKey === key) {
        setValue(newValue);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, [key]);

  return { value };
};

export { useLocalStorage };
