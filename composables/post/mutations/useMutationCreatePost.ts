import type { UseMutationOptions } from '@tanstack/vue-query';
import { toast } from 'vue-sonner';

export const useMutationCreatePost = (
    options?: UseMutationOptions<
        PostCreateResponseDto,
        ErrorResponse,
        PostCreateRequestDto,
        unknown
    >,
) => {
    const postService = new PostServiceImpl();
    return useMutation({
        mutationFn: (payload: PostCreateRequestDto) => postService.createPost(payload),
        onSuccess: (response) => {
            toast(`Post with userId: ${response.userId} created successfully`);
        },
        ...options,
    });
};
