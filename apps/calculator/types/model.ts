import { Question, Sector, Values } from "./schema";

export type SectorProps = {
  question: Record<string, Question>;
  value: Values;
};

export type Footprint = {
  sector: {
    [Property in Sector]?: SectorProps;
  };
  // products: {
  //   "consumer-bottles": {
  //     questions: Question[];
  //   };
  // };
};
