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

  // TODO: calculate here the users footprint
  let _sum = 0;
  Object.entries(footprint.sectors).forEach(([sectorKey, sector]) => {
    Object.entries(sector).forEach(([key, value]) => {
      const _question = data.sectors[sectorKey as Sector].questions[key];
      // README: question is QuestionSelect will return a narrowed type
      // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
      if (isSelect(_question)) {
        _sum += _question.options[value].value;
      } else {
        _sum += Number(value);
      }
    });
  });

  return { footprint, setFootprint, sum: _sum, reset };
};

export default useFootprint;
