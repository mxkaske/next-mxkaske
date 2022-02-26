import { Footprint } from "../types/model";
import { transport } from "./sectors/transport";
import { food } from "./sectors/food";

export const model: Footprint = {
  sectors: {
    transport,
    food,
  },
} as const;