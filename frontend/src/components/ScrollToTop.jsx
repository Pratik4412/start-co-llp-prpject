import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const disableScrollPaths = ["/dashboard", "/admin-panel"];

  useEffect(() => {
    if (disableScrollPaths.some((path) => pathname.startsWith(path))) return;

    const scrollContainer = document.querySelector("#scroll-wrapper") || window;

    const scrollToTop = () => {
      if (scrollContainer === window) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const timeout = setTimeout(scrollToTop, 150);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
