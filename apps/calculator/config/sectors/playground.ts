import { SectorProps } from "../../types/model";
import { QuestionSelectOptions } from "../../types/schema";

const options = (id: string): QuestionSelectOptions => ({
  // needed for uniqueness over the website!
  [`${id}-car`]: {
    label: "car",
    value: 10,
    emoji: "🚗",
  },
  [`${id}-motorbike`]: {
    label: "motorbike",
    value: 5,
    emoji: "🏍",
  },
  [`${id}-bicycle`]: {
    label: "bicycle",
    value: 1,
    emoji: "🚴",
  },
});

export const playground: SectorProps = {
  title: "Playground",
  emoji: "🃏",
  color: "#dddddd",
  questions: {
    "select-example": {
      label: "Select Label",
      type: "select",
      defaultValue: "select-motorbike",
      options: options("select"),
    },
    "range-example": {
      label: "Range Label",
      type: "range",
      defaultValue: 50,
      min: 0,
      max: 100,
      steps: 5,
    },
    "input-example": {
      label: "Input Label",
      type: "input",
      defaultValue: 3,
    },
    "radio-example": {
      label: "Radio Label",
      type: "radio",
      defaultValue: "radio-car",
      options: options("radio"),
    },
    "checkbox-example": {
      label: "Checkbox Label",
      type: "checkbox",
      defaultValue: ["checkbox-car"],
      options: options("checkbox"),
    },
    "checkbox-card-example": {
      label: "Checkbox Card Label",
      type: "checkbox-card",
      defaultValue: ["checkbox-card-car"],
      options: options("checkbox-card"),
    },
  },
  values: {
    min: 0,
    max: 100,
    median: 50,
    average: 50,
    units: "kg/person",
  },
} as const;
