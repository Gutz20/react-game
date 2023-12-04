import { QuestionSchemaInfer } from "@/models/question";
import axios from "./axios";

export const getQuestionsRequest = async (): Promise<QuestionSchemaInfer[]> =>
  (await axios.get(`/api/v1/questions`)).data;

export const getQuestionsByDificultRequest = async (
  dificultId: number | undefined
): Promise<QuestionSchemaInfer[]> =>
  (await axios.get(`/api/v1/questions/dificult/${dificultId}`)).data;

export const getQuestionRequest = async (id: number) =>
  (await axios.get(`/api/v1/questions/${id}`)).data;

export const createQuestionRequest = async (category: any) =>
  await axios.post(`/api/v1/questions`, category);

export const updateQuestionRequest = async (id: number, category: any) =>
  await axios.put(`/api/v1/questions/${id}`, category);

export const deleteQuestionRequest = (id: number) =>
  axios.delete(`/api/v1/questions/${id}`);

export const deleteMultipleQuestionRequest = async (ids: number[]) =>
  await axios.delete(`/api/v1/questions/deleteMany`, { data: ids });
