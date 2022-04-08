import { SectorProps } from "../../types/model";
import { calculateByCountry } from "./utils";

export const household: SectorProps = {
  title: "Household",
  emoji: "🏠",
  color: "#22c55e",
  questions: {
    country: {
      label: "Country",
      question: "Where do you live in?",
      description:
        "This dictates the average amount of plastic waste. It varies a lot by each country.",
      type: "radio-card",
      defaultValue: "germany",
      options: {
        germany: { label: "Germany", value: 177, emoji: "🇩🇪" },
        usa: { label: "USA", value: 122.3, emoji: "🇺🇸" },
        france: { label: "France", value: 70.1, emoji: "🇫🇷" },
      },
    },
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
      calculate: calculateByCountry,
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
      calculate: calculateByCountry,
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
      calculate: calculateByCountry,
    },
  },
} as const;
