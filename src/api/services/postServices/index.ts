import type { AxiosRequestConfig } from "axios";
import axiosInstance from "../../axiosInstance";

export const postServices = {
  get: (params?: Record<string, any>) =>
    axiosInstance.get("/posts", { params }),
  getById: (id: number | string) => axiosInstance.get(`/posts/${id}`),
  create: (data: any, config?: AxiosRequestConfig) =>
    axiosInstance.post("/posts", data, config),
  update: (id: number | string, data: any, config?: AxiosRequestConfig) =>
    axiosInstance.put(`/posts/${id}`, data, config),
  delete: (id: number | string) => axiosInstance.delete(`/posts/${id}`),
};
