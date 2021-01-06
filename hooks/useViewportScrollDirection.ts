import { useEffect } from "react";
import { useMotionValue, useViewportScroll } from "framer-motion";

const useViewportScrollDirection = () => {
  const { scrollY } = useViewportScroll();
  const currentScrollY = useMotionValue(0);
  const scrollDirection = useMotionValue<"up" | "down" | undefined>(undefined);

  useEffect(() => {
    const detect = () =>
      scrollY.onChange((e) => {
        if (e > currentScrollY.get()) {
          scrollDirection.set("down");
        } else if (e < currentScrollY.get()) {
          scrollDirection.set("up");
        }
        currentScrollY.set(e);
      });
    return () => detect();
  }, []);

  return scrollDirection;
};

export default useViewportScrollDirection;
