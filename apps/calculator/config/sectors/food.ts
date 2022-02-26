import { SectorProps } from "../../types/model";

export const food: SectorProps = {
  questions: {
    "out-of-house": {
      title: "How often do you purchase a meal out of the house?",
      type: "select",
      options: {
        little: {
          label: "0-3",
          value: 10,
        },
        more: {
          label: "4-7",
          value: 5,
        },
        much: {
          label: ">8",
          value: 1,
        },
      },
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
