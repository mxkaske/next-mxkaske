import { SectorProps } from "../../types/model";
import { frequency } from "../utils/frequency";

export const food: SectorProps = {
  questions: {
    "out-of-house": {
      title: "How often do you purchase a meal out of the house?",
      type: "range",
      min: 0,
      max: 100,
      steps: 5,
    },
    "plastic-dishes": {
      title: "How often do you use single use plastic dishes?",
      type: "radio",
      ...frequency({ daily: 10, weekly: 20, monthly: 30 }),
    },
  },
  value: {
    min: 0,
    max: 100,
    median: 50,
    average: 50,
    units: "kg/person",
  },
} as const;
