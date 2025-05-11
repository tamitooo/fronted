// src/services/authService.ts
import axios from "axios";

const API_URL = "http://localhost:3000/auth"; 

export const authService = {
  register: async (userData: {
    nombre: string;
    email: string;
    password: string;
  }) => {
    return axios.post(`${API_URL}/register`, userData);
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    console.log("Respuesta del login:", response.data);
    if (response.data.data?.token) {
      localStorage.setItem("user", JSON.stringify(response.data.data)); // Guardar token
    }
    return response.data;
  },
  getProfile: async (userId: number) => {
    return axios.get(`${API_URL}/user/${userId}`);
  },

  logout: () => {
    localStorage.removeItem("user"); // Eliminar token
  },
};
