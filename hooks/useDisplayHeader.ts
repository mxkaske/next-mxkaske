import { useMotionValue, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import useViewportScrollDirection from "./useViewportScrollDirection";

const ERROR_BOUNDARY = 0.01;

const useDisplayHeader = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scrollDirection = useViewportScrollDirection();
  const displayHeader = useMotionValue<boolean>(true);

  useEffect(
    () =>
      scrollY.onChange((e) => {
        console.log(scrollYProgress.get());
        if (scrollYProgress.get() >= 1 - ERROR_BOUNDARY) {
          displayHeader.set(true);
          // navbar height 60 - delay
        } else if (e > 60 && scrollDirection.get() === "down") {
          displayHeader.set(false);
        } else if (scrollDirection.get() === "up") {
          displayHeader.set(true);
        }
      }),
    [scrollDirection, scrollY, scrollYProgress]
  );

  return displayHeader;
};

export default useDisplayHeader;
