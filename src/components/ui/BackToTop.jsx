import { useEffect, useState } from "react";
import ArrowUp from "../icons/ArrowUp";
import IconButton from "./IconButton";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    if (window.scrollY > 200) setIsVisible(true);
    else setIsVisible(false);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <IconButton
      aria-label="Scroll to Top"
      variant="filled"
      className="fixed bottom-8 right-8 lg:bottom-10 lg:right-10 z-80"
      onClick={scrollToTop}
    >
      <ArrowUp color="white" />
    </IconButton>
  ) : null;
}
