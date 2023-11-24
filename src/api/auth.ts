import { FormSchemaLogin } from "@/types/formTypes";
import axios from "./axios";

export const loginRequest = async (user: FormSchemaLogin) =>
  await axios.post(`/api/v1/auth`, user);

export const getCurrentUserRequest = async () =>
  await axios.get(`/api/v1/users/userInfo`);

export const registerRequest = (user: any) =>
  axios.post(`/api/v1/users/create`, user);

export const recoveryPasswordRequest = () =>
  axios.post(`/api/v1/users/recoveryPassword`);
