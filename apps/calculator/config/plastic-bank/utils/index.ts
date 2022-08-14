import { DataModelWithValues } from "../../../types/model";
import { questionToNumber } from "../../../utils";

export const calculateByCountry = (
  data: DataModelWithValues,
  value: number
) => {
  const depValue = questionToNumber(data.sectors.household.questions.country);
  return depValue * value;
};
