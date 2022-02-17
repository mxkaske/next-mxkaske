type QuestionBase = {
  title: string;
  description?: string;
};

type QuestionSelect = QuestionBase & {
  type: "select";
  options: Record<
    string,
    {
      label: string;
      value: number;
    }
  >;
};

type QuestionInput = QuestionBase & {
  type: "input";
};

export type Question = QuestionSelect | QuestionInput;

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
