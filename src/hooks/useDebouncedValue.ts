import { useEffect, useState } from "react";

export const useDebouncedValue = (input = '', delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  return debouncedValue;
}