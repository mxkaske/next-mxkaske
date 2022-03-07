import { DataModel } from "../types/model";
import { transport } from "./sectors/transport";
import { food } from "./sectors/food";

export const data: DataModel = {
  sectors: {
    transport,
    food,
  },
  // values: Values to determine min, max, average,.. of overall consumption
} as const;
