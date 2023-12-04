import { DificultSchemaInfer } from "@/models/dificult";
import axios from "./axios";

export const getDificultsRequest = async (): Promise<DificultSchemaInfer[]> =>
  (await axios.get(`/api/v1/dificults`)).data;

export const createDificultRequest = async (dificult: DificultSchemaInfer) =>
  await axios.post(`/api/v1/dificults`, dificult);
