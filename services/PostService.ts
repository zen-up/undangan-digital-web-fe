export type PostService = {
    getPostList: (params: PostPaginationSearchParams) => Promise<PostListResponseDto[]>;
};
