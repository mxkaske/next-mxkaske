import { DataModel } from "../../types/model";
import { transport } from "./transport";
import { food } from "./food";
import { technology } from "./technology";
import { construction } from "./construction";
import { playground } from "./playground";

export const data: DataModel = {
  name: "example",
  sectors: {
    transport,
    food,
    playground,
    technology,
    construction,
  },
} as const;
