import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postServices } from "../services/postServices";

export const useCreatePosts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postServices.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Post"] });
    },
  });
};
