// TODO: how set defaultValue of question to average?

type QuestionBase = {
  label: string;
  description?: string;
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
  defaultValue: string;
};

export type QuestionRadio = QuestionBase & {
  type: "radio";
  options: QuestionSelectOptions;
  defaultValue: string;
};

export type QuestionRange = QuestionBase & {
  type: "range";
  defaultValue: number;
  min: number;
  max: number;
  steps?: number;
};

type WithDefaultValue<T extends { defaultValue: any }> = T;

type A = WithDefaultValue<QuestionRange | QuestionInput>;

export type QuestionInput = QuestionBase & {
  type: "input";
  defaultValue: number;
};

export type Question =
  | QuestionSelect
  | QuestionRadio
  | QuestionInput
  | QuestionRange;

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
  | "clothing";

export type Product =
  | "consumer-bottles"
  | "consumer-bags"
  | "agriculture-pipes";

export type Polymer = "LDPE" | "HDPE" | "PET";
