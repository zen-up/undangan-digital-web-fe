import type { UseQueryOptions } from '@tanstack/vue-query';

export const useQueryPostList = ({
    params,
    searchCount,
    options,
}: {
    params: PostPaginationSearchParams;
    searchCount: MaybeRef<number>;
    options?: UseQueryOptions<PostListResponseDto[]>;
}) => {
    const postService = new PostServiceImpl();
    const query = useQuery<PostListResponseDto[]>({
        queryKey: ['post-list', params, searchCount],
        queryFn: () => postService.getPostList(params),
        ...options,
    });
    const total = computed(() => numberOrZero(query.data.value?.length));
    const results = computed(() =>
        query.data.value && isArray(query.data.value) ? query.data.value : [],
    );
    const refetch = () => {
        if (params.page > 1)
            params.setFirstPage();
        query.refetch();
    };
    return { ...query, total, results, refetch };
};
