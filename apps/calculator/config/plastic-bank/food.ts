import { SectorProps } from "../../types/model";

export const food: SectorProps = {
  title: "Food and Beverages",
  emoji: "🥗",
  color: "#2563eb",
  questions: {
    "out-of-house": {
      label: "Out of house meals",
      question: "How often do you purchase a meal out of house?",
      type: "radio-card",
      defaultValue: "3-6",
      options: {
        "0-2": { label: "0 to 2 times a week", value: -0.03, emoji: "🍽️" },
        "3-6": { label: "3-6", value: 0, emoji: "🍝" },
        "+7": { label: "+7", value: 0.1, emoji: "🍱" },
      },
    },
    "convenience-food": {
      label: "convenience-food",
      question: "How often do you purchase convenience foods?",
      description: "Prepared meals to cook at home",
      type: "radio-card",
      defaultValue: "sometimes",
      options: {
        never: { label: "never", value: -0.1, emoji: "❌" },
        sometimes: { label: "sometimes", value: 0, emoji: "🤝" },
        always: { label: "always", value: 0.1, emoji: "🌯" },
      },
    },
  },
} as const;
