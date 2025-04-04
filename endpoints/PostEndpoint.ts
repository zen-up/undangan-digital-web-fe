export class PostEndpoint {
    static {
        Endpoint.setEndpoint({
            baseUrl: 'https://jsonplaceholder.typicode.com',
        });
    }

    public static readonly POSTS = Endpoint.getPath('posts');
}
