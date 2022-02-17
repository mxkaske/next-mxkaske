import { Question, Sector, Values } from "./schema";

export type Footprint = {
  sector: {
    [Property in Sector]?: {
      question: Record<string, Question>;
      value: Values;
    };
  };
  // products: {
  //   "consumer-bottles": {
  //     questions: Question[];
  //   };
  // };
};
