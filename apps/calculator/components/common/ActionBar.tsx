import { useRouter } from "next/router";
import React from "react";
import { Button, Heading, Text } from "ui";
import useFootprint from "../../hooks/useFootprint";

const ActionBar = () => {
  const { sum, reset } = useFootprint();
  const router = useRouter();

  const handleClick = () => {
    reset();
    // TODO: reset form instead of reload - better UX
    router.reload();
  };

  return (
    <div className="flex justify-between">
      <div>
        <Heading as="h4">Total:</Heading>
        <Text>{sum}</Text>
      </div>
      <div>
        <Button onClick={handleClick}>Reset</Button>
      </div>
    </div>
  );
};

export default ActionBar;
