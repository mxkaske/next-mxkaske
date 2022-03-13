import { DataModel, UserFootprint } from "./model";

type QuestionBase = {
  label: string;
  description?: string;
  // sometimes, you'd like to calculate the plastic amount based on user's input
  // e.g. number of bottles * amount of plastic per bottle = total plastic
  calculate?: (data: DataModel, value: number) => number;
};

export type QuestionSelectOptions = Record<
  // use the key string as value for refering the actual value
  string,
  {
    label: string;
    value: number;
  }
>;

// TODO: how to type the `defaultValue` to be a valid option key
// export type QuestionSelect<
//   T extends QuestionSelectOptions,
//   K extends keyof T
// > = QuestionBase & {
//   type: "select";
//   options: T;
//   defaultValue: K;
// };

export type QuestionSelect = QuestionBase & {
  type: "select";
  options: QuestionSelectOptions;
  defaultValue?: string;
};

export type QuestionRadio = QuestionBase & {
  type: "radio";
  options: QuestionSelectOptions;
  defaultValue?: string;
};

export type QuestionRange = QuestionBase & {
  type: "range";
  defaultValue?: number;
  min: number;
  max: number;
  steps?: number;
};

export type QuestionCheckbox = QuestionBase & {
  type: "checkbox";
  defaultValue?: readonly string[];
  options: QuestionSelectOptions;
};

export type QuestionInput = QuestionBase & {
  type: "input";
  defaultValue?: number;
};

export type Question =
  | QuestionSelect
  | QuestionRadio
  | QuestionInput
  | QuestionRange
  | QuestionCheckbox;

export type Values = {
  min: number;
  max: number;
  median: number;
  average: number;
  units: string; // or more specific e.g. "kg/person"
};

export type Sector =
  | "transport"
  | "food"
  | "packaging"
  | "construction"
  | "technology"
  | "clothing";

export type Product =
  | "consumer-bottles"
  | "consumer-bags"
  | "agriculture-pipes";

export type Polymer = "LDPE" | "HDPE" | "PET";
