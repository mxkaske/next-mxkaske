import { SectorProps } from "../../types/model";

export const construction: SectorProps = {
  title: "Construction",
  emoji: "🚧",
  color: "#ca8a04",
  questions: {
    hello: {
      label: "With Emojis",
      type: "select",
      defaultValue: "motorbike",
      options: {
        car: {
          // TODO: instead of adding the emoji, create a property for it!
          // Easier to use it elsewhere
          label: "🚗 car",
          // description
          value: 10,
        },
        motorbike: {
          label: "🏍 motorbike",
          value: 5,
        },
        bicycle: {
          label: "🚴‍♀️ bicycle",
          value: 1,
        },
      },
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
