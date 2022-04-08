import { SectorProps } from "../../types/model";

export const household: SectorProps = {
  title: "Household",
  emoji: "🏠",
  color: "#22c55e",
  questions: {
    "type-of-home": {
      label: "Type of home",
      question: "What type of home do you live in?",
      type: "radio-card",
      defaultValue: "townhouse",
      options: {
        house: { label: "single family house", value: 0.05, emoji: "🏡" },
        townhouse: { label: "townhouse / duplex", value: 0, emoji: "🏘" },
        appartment: { label: "appartment / condo", value: -0.05, emoji: "🏬" },
      },
    },
    "recycling-box": {
      label: "Recycling pickup",
      question: "Does your home have municipal recycling pickup (bluebox)?",
      type: "radio-card",
      defaultValue: "yes",
      options: {
        yes: { label: "yes", value: -0.05, emoji: "♻️" },
        no: { label: "no", value: 0.1, emoji: "❌" },
        idk: { label: "I don't know", value: 0.05, emoji: "🤷" },
      },
    },
    "deposit-recycling": {
      label: "Deposit recycling programm",
      question: "Does your region have a container deposit recycling program?",
      type: "radio-card",
      defaultValue: "yes",
      options: {
        yes: { label: "yes", value: -0.05, emoji: "♻️" },
        no: { label: "no", value: 0.1, emoji: "❌" },
        idk: { label: "I don't know", value: 0.05, emoji: "🤷" },
      },
    },
  },
} as const;
