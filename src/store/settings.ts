import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Character = {
  name: string;
  image: string;
};

type State = {
  volume: number;
  time: number;
  selectedCharacter: Character | null;
};

type Actions = {
  setTime: (time: number) => void;
  setVolume: (volume: number) => void;
  selectCharacter: (character: Character) => void;
  clearSelection: () => void;
};

export const useSettingStore = create(
  persist<State & Actions>(
    (set) => ({
      volume: 50,
      time: 30,
      selectedCharacter: {
        name: "/Squirtle.png",
        image: "Squirtle",
      },
      setTime: (time: number) =>
        set((state) => ({
          ...state,
          time,
        })),
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
