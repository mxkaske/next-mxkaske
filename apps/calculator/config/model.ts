import { Footprint } from "../types/model";
import { transport } from "./sectors/transport";

export const model: Footprint = {
  sector: {
    transport,
  },
} as const;
