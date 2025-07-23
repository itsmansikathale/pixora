import { useEffect, useState } from "react";

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  // it will run whenever the component is loaded
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
};
