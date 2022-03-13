import { SectorProps } from "../../types/model";
import { FiMonitor } from "react-icons/fi";

export const technology: SectorProps = {
  title: "Technology",
  icon: FiMonitor,
  questions: {
    "number-of-computer": {
      label: "Number of Computer",
      type: "input",
      defaultValue: 1,
      calculate: (data, value) => {
        return 5 * value;
      },
    },
    "test-checkbox": {
      label: "Test Checkbox",
      type: "checkbox",
      defaultValue: ["one"],
      options: {
        one: {
          label: "One",
          value: 1,
        },
        two: {
          label: "Two",
          value: 2,
        },
        three: {
          label: "Three",
          value: 3,
        },
      },
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
