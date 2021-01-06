import { useMotionValue, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import useViewportScrollDirection from "./useViewportScrollDirection";

const useDisplayHeader = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scrollDirection = useViewportScrollDirection();
  const displayHeader = useMotionValue<boolean>(true);

  useEffect(() => {
    return () => {
      scrollY.onChange((e) => {
        if (scrollYProgress.get() >= 1) {
          displayHeader.set(true);
          // navbar height 60 - delay
        } else if (e > 60 && scrollDirection.get() === "down") {
          displayHeader.set(false);
        } else if (scrollDirection.get() === "up") {
          displayHeader.set(true);
        }
      });
    };
  }, []);

  return displayHeader;
};

export default useDisplayHeader;
