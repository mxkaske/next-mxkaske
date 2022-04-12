import { useRouter } from "next/router";
import React from "react";
import { Button, Heading, Text } from "ui";
import { data } from "../../config/data";
import useFootprint from "../../hooks/useFootprint";
import { UserFootprint } from "../../types/model";
import ThemeSelect from "../ui/ThemeSelect";

// TODO: move to `utils` file or `useFootprint` hook
const checkAllAnswered = (footprint: UserFootprint) => {
  const { sectors } = data;
  let flag = true;
  Object.entries(sectors).map(([k1, s]) => {
    Object.entries(s.questions).map(([k2, q]) => {
      if (!footprint.sectors[k1]?.[k2]) {
        flag = false;
      }
    });
  });
  return flag;
};

const ActionBar = () => {
  const { calculate, reset, footprint } = useFootprint();
  const router = useRouter();

  const handleClick = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="flex justify-end border-t dark:border-t-gray-700 pt-3 space-x-3">
      {router.pathname !== "/results" && checkAllAnswered(footprint) ? (
        <Button variant="invert" onClick={() => router.push("/results")}>
          Results
        </Button>
      ) : null}
      <Button onClick={handleClick}>Reset</Button>
      <ThemeSelect />
    </div>
  );
};

export default ActionBar;
