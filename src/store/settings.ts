import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Character = {
  name: string;
  image: string;
};

type State = {
  volume: number;
  selectedCharacter: Character | null;
};

type Actions = {
  setVolume: (volume: number) => void;
  selectCharacter: (character: Character) => void;
  clearSelection: () => void;
};

export const useSettingStore = create(
  persist<State & Actions>(
    (set) => ({
      volume: 50,
      selectedCharacter: null,
      setVolume: (volume: number) =>
        set((_) => ({
          volume,
        })),
      selectCharacter: (character: Character) =>
        set((state) => ({
          selectedCharacter: character,
        })),
      clearSelection: () =>
        set((state) => ({
          selectedCharacter: null,
        })),
    }),
    { name: "settings" }
  )
);
