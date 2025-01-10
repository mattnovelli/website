import { atom } from "recoil";

export const microwaveDisplayState = atom({
  key: "microwaveDisplayState",
  default: 0,
});

export const cookingState = atom({
  key: "cookingState",
  default: false,
});
