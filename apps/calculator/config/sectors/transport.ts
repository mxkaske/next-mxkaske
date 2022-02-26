import { SectorProps } from "../../types/model";

export const transport: SectorProps = {
  questions: {
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
      type: "range",
      min: 0,
      max: 100,
      steps: 5,
    },
    test: {
      title: "Test",
      type: "input",
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
