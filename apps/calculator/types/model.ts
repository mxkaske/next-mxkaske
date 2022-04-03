import React from "react";
import { Question, Sector, Values } from "./schema";

export type SectorProps = {
  title: string;
  // icon: (props: React.SVGAttributes<SVGElement>) => JSX.Element;
  emoji: string;
  questions: Record<string, Question>;
  values: Values;
};

export type DataModel = {
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
    // number for range/input - string for select/radio - string[] for checkbox
    [Property in Sector]?: Record<string, number | string | string[]>;
  };
};
