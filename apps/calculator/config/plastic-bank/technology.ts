import { SectorProps } from "../../types/model";

export const technology: SectorProps = {
  title: "Technology",
  emoji: "💻",
  color: "#2563eb",
  questions: {
    "online-shopping": {
      label: "Out of house meals",
      question: "How often do you shop online?",
      type: "radio-card",
      defaultValue: "monthly",
      options: {
        weekly: { label: "weekly", value: 0.06, emoji: "📅" },
        "few-weeks": { label: "every few weeks", value: 0.03, emoji: "📅" },
        monthly: { label: "monthly", value: 0, emoji: "🗓️" },
        "few-months": { label: "every few months", value: -0.01, emoji: "🗓️" },
        never: { label: "never", value: -0.03, emoji: "❌" },
      },
    },
    "number-of-devices": {
      label: "Number of devices",
      question: "How many of technical devices do you own?",
      description:
        "They can be: cells, tablets, laptops, computers, smart speakers, consoles, tvs,...",
      type: "radio-card",
      defaultValue: "3-5",
      options: {
        "0-2": { label: "0-2", value: -0.05, emoji: "📱" },
        "3-5": { label: "3-5", value: 0, emoji: "🖥️" },
        "+6": { label: "+6", value: 0.05, emoji: "🤖" },
      },
    },
  },
} as const;
