import { SectorProps } from "../../types/model";
import { calculateByCountry } from "./utils";

export const lifestyle: SectorProps = {
  title: "Lifestyle",
  emoji: "😎",
  color: "#06b6d4",
  questions: {
    smoking: {
      label: "Smoking",
      question: "Do you smoke or use an e-cigarette",
      type: "radio-card",
      defaultValue: "no",
      options: {
        no: { label: "no", value: 0, emoji: "🥳" },
        yes: { label: "yes", value: 0.05, emoji: "🚬" },
      },
      calculate: calculateByCountry,
    },
    "shop-clothing": {
      label: "Clothing / Shoe shopping",
      type: "radio-card",
      question:
        "How many items of clothing or footwear do you purchase a month?",
      defaultValue: "3-5",
      options: {
        "0-2": { label: "0 to 2", value: -0.05, emoji: "👟" },
        "3-5": { label: "3-5", value: 0, emoji: "🛍️" },
        "+6": { label: "+6", value: 0.1, emoji: "🛒" },
      },
      calculate: calculateByCountry,
    },
    "reusable-bags": {
      label: "Reusable bags",
      type: "radio-card",
      question: "How often do you bring reusable bags when you are shopping",
      defaultValue: "sometimes",
      options: {
        never: { label: "never", value: 0.05, emoji: "❌" },
        sometimes: { label: "sometimes", value: 0, emoji: "🤝" },
        always: { label: "always", value: -0.05, emoji: "🎒" },
      },
      calculate: calculateByCountry,
    },
    pets: {
      label: "Pets",
      type: "radio-card",
      question: "Do you have pets, if so what size?",
      defaultValue: "small",
      options: {
        "no-pets": { label: "no pets", value: -0.05, emoji: "❌" },
        small: { label: "small (rabbit, dog)", value: 0, emoji: "🐰" },
        medium: { label: "medium (cat, dog)", value: +0.05, emoji: "🐕" },
        large: { label: "large or multiple", value: +0.08, emoji: "🐠" },
      },
      calculate: calculateByCountry,
    },
  },
} as const;
