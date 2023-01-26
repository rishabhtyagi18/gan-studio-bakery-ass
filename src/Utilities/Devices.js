import { useState, useEffect } from "react";

export const useResponsive = () => {
  const query = "(max-width: 768px)";
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handleChange = (e) => setIsMobile(e.matches);
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};
