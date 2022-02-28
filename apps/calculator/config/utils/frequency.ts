import { QuestionSelect } from "../../types/schema";

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
}: Frequency): Omit<QuestionSelect, "title"> => ({
  type: "select",
  options: {
    never: {
      label: "Never",
      value: never || 0,
    },
    daily: {
      label: "Daily",
      value: daily,
    },
    weekly: {
      label: "Weekly",
      value: weekly,
    },
    monthly: {
      label: "Montly",
      value: monthly,
    },
  },
});
