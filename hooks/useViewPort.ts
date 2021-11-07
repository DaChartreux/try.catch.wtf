import { useState, useEffect } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const handleWindowResize = () =>
    setWidth(document.documentElement.clientWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};
