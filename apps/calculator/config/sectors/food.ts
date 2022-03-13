import { SectorProps } from "../../types/model";
import { frequency } from "../utils/frequency";
import { FiCoffee } from "react-icons/fi";

export const food: SectorProps = {
  title: "Food & Baverage",
  icon: FiCoffee,
  questions: {
    "out-of-house": {
      label: "How often do you purchase a meal out of the house?",
      type: "range",
      min: 0,
      max: 100,
      steps: 5,
      defaultValue: 40,
    },
    "plastic-dishes": {
      label: "How often do you use single use plastic dishes?",
      type: "radio",
      defaultValue: "weekly",
      ...frequency({ daily: 10, weekly: 20, monthly: 30 }),
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
