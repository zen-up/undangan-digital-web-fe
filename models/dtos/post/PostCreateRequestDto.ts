export class PostCreateRequestDto {
    userId!: string;
    title!: string;

    setUserId(userId: string): this {
        this.userId = userId;
        return this;
    }

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    toRequest(): PostCreateRequest {
        return {
            user_id: this.userId,
            title: this.title,
        };
    }
}
