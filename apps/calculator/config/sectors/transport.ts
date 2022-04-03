import { SectorProps } from "../../types/model";

export const transport: SectorProps = {
  title: "Transport",
  emoji: "🚌",
  questions: {
    "primary-transportation": {
      label: "Primary transportation",
      type: "select",
      defaultValue: "motorbike",
      options: {
        car: {
          label: "Car",
          // description
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
      label: "Car usage",
      type: "range",
      defaultValue: 50,
      min: 0,
      max: 100,
      steps: 5,
    },
    test: {
      label: "Test",
      type: "input",
      defaultValue: 3,
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
