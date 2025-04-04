export type PostListResponse = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type PostCreateRequest = {
    user_id: string;
    title: string;
};

export type PostCreateResponse = {
    user_id: string;
    title: string;
};
