import { SectorProps } from "../../types/model";

export const transport: SectorProps = {
  title: "Transport",
  emoji: "🚌",
  color: "#2563eb",
  questions: {
    "primary-transportation": {
      label: "Primary transportation",
      type: "select",
      defaultValue: "motorbike",
      options: {
        car: {
          label: "car",
          value: 10,
          emoji: "🚗",
        },
        motorbike: {
          label: "motorbike",
          value: 5,
          emoji: "🏍",
        },
        bicycle: {
          label: "bicycle",
          value: 1,
          emoji: "🚴",
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
