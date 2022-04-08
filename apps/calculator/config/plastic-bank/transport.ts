import { SectorProps } from "../../types/model";

export const transport: SectorProps = {
  title: "Transport",
  emoji: "🚌",
  color: "#ef4444",
  questions: {
    "primary-transportation": {
      label: "Primary transportation",
      question: "What is your primary transportation method?",
      description: "Based on your daily life.",
      type: "radio-card",
      defaultValue: "motorbike",
      options: {
        car: { label: "car", value: 0.1, emoji: "🚗" },
        motorbike: { label: "motorbike", value: 0, emoji: "🏍" },
        bicycle: { label: "bicycle", value: -0.01, emoji: "🚴" },
        walking: { label: "walking", value: -0.1, emoji: "🚶‍♂️" },
      },
    },
    "car-usage": {
      label: "Car usage",
      question: "If you are using a car, what is the purpose of it?",
      type: "radio-card",
      defaultValue: "no-usage",
      options: {
        "no-usage": { label: "no usage", value: -0.1, emoji: "❌" },
        "car-share": { label: "car share", value: 0.05, emoji: "🤝" },
        family: { label: "family", value: -0.01, emoji: "👨‍👩‍👦" },
        personal: { label: "personal", value: 0.15, emoji: "🧑" },
      },
    },
  },
} as const;
