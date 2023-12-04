import { persist } from "zustand/middleware";
import { create } from "zustand";

type State = {
  alias: string;
};

type Actions = {
  setAlias: (alias: string) => void;
  clearAlias: () => void;
};

export const useAliasStore = create(
  persist<State & Actions>(
    (set) => ({
      alias: "",
      setAlias: (alias: string) =>
        set((_) => ({
          alias,
        })),
      clearAlias: () =>
        set((state) => ({
          alias: "",
        })),
    }),

    { name: "alias" }
  )
);
