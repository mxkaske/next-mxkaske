import React, { useEffect } from "react";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { motion, useAnimation, Variants } from "framer-motion";
import Button from "./button";
import Container from "./container";
import { useDisplayHeader } from "../hooks";

const NavBar = () => {
  const displayHeader = useDisplayHeader();
  const controls = useAnimation();

  useEffect(() => {
    return () => {
      displayHeader.onChange((e) => {
        if (e) controls.start("visible");
        else controls.start("hidden");
      });
    };
  }, []);

  const container: Variants = {
    visible: { y: 0 },
    hidden: { y: -60 },
  };

  return (
    <motion.header
      className="w-full bg-primary-600 fixed top-0"
      variants={container}
      animate={controls}
      initial="hidden"
      transition={{
        type: "tween",
      }}
    >
      <Container className="flex justify-between items-center">
        <h3 className="text-white">mxkaske</h3>
        <div className="flex">
          <Button className="text-2xl text-white mr-4">
            <FiTwitter />
          </Button>
          <Button className="text-2xl text-white">
            <FiGithub />
          </Button>
        </div>
      </Container>
    </motion.header>
  );
};

export default NavBar;
