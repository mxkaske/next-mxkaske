import { QuestionSelectOptions } from "../../types/schema";

type Frequency = {
  daily: number;
  weekly: number;
  monthly: number;
  never?: number;
};

export const frequency = ({
  daily,
  weekly,
  monthly,
  never,
}: Frequency): { options: QuestionSelectOptions } => ({
  options: {
    never: {
      label: "Never",
      value: never || 0,
      emoji: "😀",
    },
    daily: {
      label: "Daily",
      value: daily,
      emoji: "😅",
    },
    weekly: {
      label: "Weekly",
      value: weekly,
      emoji: "😬",
    },
    monthly: {
      label: "Montly",
      value: monthly,
      emoji: "🙂",
    },
  },
});
