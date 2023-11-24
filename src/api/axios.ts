import { useAuthStore } from "@/store/store";
import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:8080`,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
