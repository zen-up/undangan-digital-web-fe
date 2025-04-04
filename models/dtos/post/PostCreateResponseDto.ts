export class PostCreateResponseDto {
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
}
