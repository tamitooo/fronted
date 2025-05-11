// src/utils/axiosInterceptor.ts
import axios from "axios";
import { authService } from "../services/authService";

axios.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});