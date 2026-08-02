import type { AxiosRequestConfig } from "axios";

import axiosInstance from "../../axiosInstance";

import type { PostType } from "./type";

export const postServices = {
  get: (
    params?: Record<string, string | number | boolean>,
  ) => axiosInstance.get<PostType[]>("/posts", { params }),

  getById: (id: number | string) => axiosInstance.get(`/posts/${id}`),
  
 create: async (
  data: Omit<PostType, "id">,
  config?: AxiosRequestConfig
): Promise<PostType> => {
  const response = await axiosInstance.post<PostType>(
    "/posts",
    data,
    config
  );

  return response.data;
},

  update: (
    id: number | string,
    data: Partial<PostType>,
    config?: AxiosRequestConfig,
  ) => axiosInstance.put<PostType>(`/posts/${id}`, data, config),
  delete: (id: number | string) => axiosInstance.delete(`/posts/${id}`),
};
