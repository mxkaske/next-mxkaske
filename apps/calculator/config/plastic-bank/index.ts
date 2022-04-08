import { DataModel } from "../../types/model";
import { transport } from "./transport";
import { food } from "./food";
import { technology } from "./technology";
import { lifestyle } from "./lifestyle";
import { household } from "./household";

export const data: DataModel = {
  name: "plastic-bank",
  sectors: {
    transport,
    food,
    household,
    technology,
    lifestyle,
  },
} as const;
