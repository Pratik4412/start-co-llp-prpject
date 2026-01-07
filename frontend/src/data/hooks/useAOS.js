import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
  }, []);
};

export default useAOS;
