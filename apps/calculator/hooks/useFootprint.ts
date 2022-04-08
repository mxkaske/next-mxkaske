import { useLocalStorage } from "usehooks-ts";
import { DataModel, DataModelWithValues, UserFootprint } from "../types/model";
import { Question, QuestionWithValue, Sector } from "../types/schema";
import { data } from "../config/data";
import { useCallback } from "react";
import { isCheckbox, isRadio, isSelect, questionToNumber } from "../utils";

const setCurrentValues = (
  data: DataModel,
  footprint: UserFootprint
): DataModelWithValues => {
  const newData: DataModelWithValues = { sectors: {} };
  Object.keys(data.sectors).map((sector: Sector) => {
    const newSectorData = data.sectors[sector] as any;
    const questions = data.sectors[sector].questions;
    let sum = 0;
    Object.keys(questions).map((question: keyof typeof questions) => {
      const currentValue = footprint.sectors?.[sector]?.[question];
      const defaultValue =
        data.sectors[sector].questions[question].defaultValue;
      const value = currentValue ?? (defaultValue || 0);
      newSectorData.questions[question].value = value;
      // TODO: missing is the calculate property that changes the value
      // it is **not just** a simple sum...
      sum += questionToNumber({
        ...questions[question],
        value,
      } as QuestionWithValue);
    });
    newSectorData.value = sum;
    newData.sectors[sector] = newSectorData;
  });
  return newData;
};

const useFootprint = () => {
  const [footprint, setFootprint] = useLocalStorage<UserFootprint>(
    `footprint-${data.name}`,
    // TODO: directly from the start, we should build
    // the entire "defaultValue" footprint tree
    { sectors: {} }
  );

  const dataWithValues = setCurrentValues(data, footprint);
  // console.log(dataWithValues);

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
        if (
          (isSelect(_question) || isRadio(_question)) &&
          !Array.isArray(value)
        ) {
          if (_question.calculate) {
            return (
              prev +
              _question.calculate(
                dataWithValues,
                _question.options[value].value
              )
            );
          }
          return prev + _question.options[value].value;
        }
        if (isCheckbox(_question) && Array.isArray(value)) {
          const checked = Object.keys(_question.options).filter((key) =>
            value.includes(key)
          );
          return (
            prev +
            checked.reduce(
              (prev, curr) => prev + _question.options[curr].value,
              0
            )
          );
        }
        if (_question.calculate) {
          return prev + _question.calculate(dataWithValues, Number(value));
        }
        return prev + Number(value);
      },
      0
    );
  };

  // TODO: calculate either all or only for a sector
  // make it memoizable
  // OR: similar to dataWithValues, always return the calculated values!
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
