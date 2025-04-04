export class PostListResponseDto {
    userId!: number;
    id!: number;
    title!: string;
    body!: string;

    setUserId(userId: number): this {
        this.userId = userId;
        return this;
    }

    setId(id: number): this {
        this.id = id;
        return this;
    }

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    setBody(body: string): this {
        this.body = body;
        return this;
    }

    get excerpt() {
        return truncateString({
            text: this.body,
            maxLength: 20,
        });
    }
}
