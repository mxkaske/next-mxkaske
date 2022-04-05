import { DataModel } from "../types/model";
import { transport } from "./sectors/transport";
import { food } from "./sectors/food";
import { technology } from "./sectors/technology";
import { construction } from "./sectors/construction";

export const data: DataModel = {
  sectors: {
    transport,
    food,
    technology,
    construction,
  },
  // values: Values to determine min, max, average,.. of overall consumption
} as const;
