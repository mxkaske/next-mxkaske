import { Footprint } from "../../types/model";

export const transport = {
  question: {
    "primary-transportation": {
      title: "Primary transportation",
      type: "select",
      options: {
        car: {
          label: "Car",
          value: 10,
        },
        motorbike: {
          label: "Motorbike",
          value: 5,
        },
        bicycle: {
          label: "Bicycle",
          value: 1,
        },
      },
    },
    "car-usage": {
      title: "Car usage",
      type: "select",
      options: {
        personal: {
          label: "Personal",
          value: 2,
        },
        family: {
          label: "Family",
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
