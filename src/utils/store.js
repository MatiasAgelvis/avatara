import { atom } from "recoil";
import { layers__Default } from "./createCard";
import { BASE } from "./url";

export const layersAtom = atom({
  key: "layersState",
  default: layers__Default,
});

export const urlAtom = atom({
  key: "urlState",
  default: BASE,
});
