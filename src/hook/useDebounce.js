import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  // state to save text value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // create new timeout on each value change
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // re-call effect if value or delay changes
  );
  return debouncedValue;
}