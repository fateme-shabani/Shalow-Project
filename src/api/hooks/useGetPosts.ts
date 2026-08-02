import { useQuery } from "@tanstack/react-query";
import { postServices } from "../services/postServices";

export const useGetPosts = (
  params?: Record<string, string | number | boolean>,
) => {
  return useQuery({
    queryKey: ["Post", params],
    queryFn: () => postServices.get(params),
  });
};
