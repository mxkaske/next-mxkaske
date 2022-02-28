import { DataModel } from "../types/model";
import { transport } from "./sectors/transport";
import { food } from "./sectors/food";

export const data: DataModel = {
  sectors: {
    transport,
    food,
  },
} as const;
