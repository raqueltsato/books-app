import { useEffect, useRef, useState } from "react";

export default function useDebounce(value: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const ref = useRef(0);

  useEffect(() => {
    clearTimeout(ref.current);

    ref.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
}
