export type PostService = {
    getPostList: (params: PostPaginationSearchParams) => Promise<PostListResponseDto[]>;
    createPost: (post: PostCreateRequestDto) => Promise<PostCreateResponseDto>;
};
