import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
};

export default useScrollToAnchor;
