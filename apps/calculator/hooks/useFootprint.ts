import { useLocalStorage } from "usehooks-ts";
import { UserFootprint } from "../types/model";
import { Sector } from "../types/schema";
import { data } from "../config/data";
import { useCallback } from "react";
import { isRadio, isSelect } from "../utils";

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
      // TODO: check for `defaultValue`
      return 0;
    }
    return Object.entries(footprint.sectors[key]).reduce(
      (prev, [questionKey, value]) => {
        const _question = data.sectors[key].questions[questionKey];
        if (isSelect(_question) || isRadio(_question)) {
          if (_question.calculate) {
            return (
              prev + _question.calculate(data, _question.options[value].value)
            );
          }
          return prev + _question.options[value].value;
        }
        if (_question.calculate) {
          return prev + _question.calculate(data, Number(value));
        }
        return prev + Number(value);
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
