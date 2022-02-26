import { Question, Sector, Values } from "./schema";

export type SectorProps = {
  questions: Record<string, Question>;
  value: Values;
};

export type Footprint = {
  sectors: {
    [Property in Sector]?: SectorProps;
  };
  // products: {
  //   "consumer-bottles": {
  //     questions: Question[];
  //   };
  // };
};

export type UserFootprint = {
  sectors: {
    [Property in Sector]?: Record<string, number | string>;
  };
};
