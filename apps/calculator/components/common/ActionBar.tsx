import { useRouter } from "next/router";
import React from "react";
import { Button, Heading, Text } from "ui";
import useFootprint from "../../hooks/useFootprint";

const ActionBar = () => {
  const { calculate, reset } = useFootprint();
  const router = useRouter();

  const handleClick = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="flex justify-between border-t dark:border-t-gray-700 pt-3">
      <div>
        <Heading as="h4">Total:</Heading>
        <Text>{calculate()}</Text>
      </div>
      <div>
        <Button onClick={handleClick}>Reset</Button>
      </div>
    </div>
  );
};

export default ActionBar;
