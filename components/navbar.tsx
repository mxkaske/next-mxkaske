import React from "react";
import { FiTwitter, FiGithub } from "react-icons/fi";
import Button from "./button";
import Container from "./container";

const NavBar = () => {
  return (
    <header className="w-full bg-primary-600 p-4">
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
    </header>
  );
};

export default NavBar;
