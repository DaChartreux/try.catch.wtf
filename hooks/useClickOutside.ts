import { useEffect, useRef } from "react";

type AnyEvent = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement | HTMLDivElement>(
  handler: (event: AnyEvent) => void,
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);

  return { ref };
};

export default useOnClickOutside;
