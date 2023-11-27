import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  volume: number;
};

type Actions = {
  setVolume: (volume: number) => void;
};

export const useSettingStore = create(
  persist<State & Actions>(
    (set) => ({
      volume: 50,
      setVolume: (volume: number) =>
        set((_) => ({
          volume,
        })),
    }),
    { name: "settings" }
  )
);
