import { useLocalStorage } from "usehooks-ts";
import { UserFootprint } from "../types/model";
import { Sector } from "../types/schema";
import { data } from "../config/data";
import { useCallback } from "react";
import { isSelect } from "../utils";

const useFootprint = () => {
  const [footprint, setFootprint] = useLocalStorage<UserFootprint>(
    "footprint",
    { sectors: {} }
  );

  const reset = useCallback(() => {
    setFootprint({
      sectors: {},
    });
  }, [setFootprint]);

  const sum = (key: Sector) => {
    // check if localStorage has key
    if (!footprint.sectors?.[key]) {
      return 0;
    }
    return Object.entries(footprint.sectors[key]).reduce(
      (prev, [questionKey, value]) => {
        const _question = data.sectors[key].questions[questionKey];
        return isSelect(_question)
          ? prev + _question.options[value].value
          : Number(value);
      },
      0
    );
  };

  // TODO: calculate either all or only for a sector
  // make it memoizable
  const calculate = (key?: Sector) => {
    if (key) {
      return sum(key);
    }
    return Object.keys(footprint.sectors).reduce((prev, curr) => {
      return prev + sum(curr as Sector);
    }, 0);
  };

  return { footprint, setFootprint, reset, calculate };
};

export default useFootprint;
