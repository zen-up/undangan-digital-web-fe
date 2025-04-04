export class PostServiceImpl implements PostService {
    async getPostList(params: PostPaginationSearchParams): Promise<PostListResponseDto[]> {
        const response = await useNuxtApp().$http<Promise<PostListResponse[]>>(
            PostEndpoint.POSTS,
            {
                method: 'GET',
                params: {
                    ...params,
                },
            },
        );

        return response.map(post =>
            new PostListResponseDto()
                .setUserId(post.userId)
                .setId(post.id)
                .setTitle(post.title)
                .setBody(post.body),
        );
    }
}
