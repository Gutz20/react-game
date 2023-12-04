import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  points: number[];
};

type Actions = {
  addPoint: (point: number) => void;
  clearPoints: () => void;
};

export const usePointsStore = create(
  persist<State & Actions>(
    (set) => ({
      points: [],
      addPoint: (point: number) =>
        set((state) => ({
          points: [...state.points, point],
        })),
      clearPoints: () =>
        set((state) => ({
          points: [],
        })),
    }),
    { name: "points" }
  )
);
