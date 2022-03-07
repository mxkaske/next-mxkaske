import React from "react";
import { Question, Sector, Values } from "./schema";

export type SectorProps = {
  title: string;
  // TODO: check if this is for unopinionated SVG icons
  icon: (props: React.SVGAttributes<SVGElement>) => JSX.Element;
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
    [Property in Sector]?: Record<string, number | string>;
  };
};
