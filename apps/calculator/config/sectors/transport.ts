import { SectorProps } from "../../types/model";
import { FiTruck } from "react-icons/fi";

export const transport: SectorProps = {
  title: "Transport",
  icon: FiTruck,
  questions: {
    "primary-transportation": {
      label: "Primary transportation",
      type: "select",
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
      min: 0,
      max: 100,
      steps: 5,
    },
    test: {
      label: "Test",
      type: "input",
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
