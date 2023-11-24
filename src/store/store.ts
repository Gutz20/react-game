import { UserAuthSchemaInfer } from "@/models/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  user: UserAuthSchemaInfer;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setUser: (user: UserAuthSchemaInfer) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      user: {
        username: "",
        password: "",
        email: "",
        roles: [{ name: "INVITED" }],
      },
      isAuth: false,
      setToken: (token: string) =>
        set((_) => ({
          token,
          isAuth: true,
        })),
      setUser: (user: UserAuthSchemaInfer) =>
        set((_) => ({
          user,
        })),
      logout: () =>
        set((_) => ({
          token: "",
          isAuth: false,
          user: {
            email: "",
            username: "",
            password: "",
            roles: [{ name: "INVITED" }],
          },
        })),
    }),
    { name: "auth" }
  )
);
