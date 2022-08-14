import { Question, QuestionWithValue, Sector, Values } from "./schema";

// TODO: rename sector with section

export type SectorProps = {
  title: string;
  emoji: string;
  color: string; // hex
  questions: Record<string, Question>;
  values?: Values; // TODO: is it needed?
};

// TODO: if we want to fully dynamically upload the json data, "Sector" cannot be defined
// instead, use: Record<string, SectorProps> or use Generics
export type DataModel = {
  name: string;
  sectors: {
    [Property in Sector]?: SectorProps;
  };
  // products: {
  //   "consumer-bottles": {
  //     questions: Question[];
  //   };
  // };
};

export type SectionPropsWithValues = Omit<SectorProps, "questions"> & {
  questions: Record<string, QuestionWithValue>;
  value: number; // the current total value of a section
};

export type DataModelWithValues = {
  sectors: {
    [Property in Sector]?: SectionPropsWithValues;
  };
};

export type UserFootprint = {
  sectors: {
    // number for range/input - string for select/radio - string[] for checkbox
    [Property in Sector]?: Record<string, number | string | string[]>;
  };
};
