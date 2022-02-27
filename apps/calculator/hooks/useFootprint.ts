import { useLocalStorage } from "usehooks-ts";
import { UserFootprint } from "../types/model";
import { QuestionSelect, Sector } from "../types/schema";
import { model } from "../config/model";
import { useCallback } from "react";

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
      const _question = model.sectors[sectorKey as Sector].questions[key];
      if (_question.type === "select") {
        const question = _question as QuestionSelect;
        _sum += question.options[value].value;
      } else {
        _sum += Number(value);
      }
    });
  });

  return { footprint, setFootprint, sum: _sum, reset };
};

export default useFootprint;
