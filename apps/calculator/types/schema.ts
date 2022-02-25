type QuestionBase = {
  title: string;
  description?: string;
};

export type QuestionSelectOption = {
  label: string;
  value: number;
};

export type QuestionSelect = QuestionBase & {
  type: "select";
  // use the key string as value for refering the actual value
  options: Record<string, QuestionSelectOption>;
};

export type QuestionRange = QuestionBase & {
  type: "range";
  min: number;
  max: number;
  steps?: number;
};

export type QuestionInput = QuestionBase & {
  type: "input";
};

export type Question = QuestionSelect | QuestionInput | QuestionRange;

export type Values = {
  min: number;
  max: number;
  median: number;
  average: number;
  units: string; // or more specific e.g. "kg/person"
};

export type Sector = "transport" | "packaging" | "construction" | "clothing";

export type Product =
  | "consumer-bottles"
  | "consumer-bags"
  | "agriculture-pipes";

export type Polymer = "LDPE" | "HDPE" | "PET";
