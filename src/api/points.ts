import axios from "./axios";

export const registrarPuntaje = (id: number, user: any) =>
  axios.put(`/api/v1/users/${id}`, user);
