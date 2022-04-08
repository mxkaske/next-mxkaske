import { SectorProps } from "../../types/model";
import { questionToNumber } from "../../utils";

export const technology: SectorProps = {
  title: "Technology",
  emoji: "🧑‍💻",
  color: "#16a34a",
  questions: {
    "tech-usage": {
      label: "tech usage",
      type: "range",
      defaultValue: 50,
      min: 0,
      max: 100,
      steps: 5,
      calculate: () => 0,
    },
    "number-of-computer": {
      label: "Number of Computer",
      type: "input",
      defaultValue: 1,
      calculate: (data, value) => {
        const depValue = questionToNumber(
          data.sectors.technology.questions["tech-usage"]
        );
        return depValue * value;
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
          emoji: "1️⃣",
        },
        two: {
          label: "Two",
          value: 2,
          emoji: "2️⃣",
        },
        three: {
          label: "Three",
          value: 3,
          emoji: "3️⃣",
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
