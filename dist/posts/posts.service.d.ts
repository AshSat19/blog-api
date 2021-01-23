import { Model } from 'mongoose';
import { BlogPost, BlogPostSimple, BlogPostModel } from './post.model';
export declare class PostsService {
    private readonly postModel;
    constructor(postModel: Model<BlogPostModel>);
    getPosts(queryOptions?: {
        published?: boolean;
        category?: string;
    }): Promise<BlogPostSimple[]>;
    getPost(slug: string): Promise<BlogPost>;
    savePost(postBody: BlogPost): Promise<BlogPost>;
    updatePost(postBody: BlogPost): Promise<BlogPost>;
    deletePost(postSlug: string): Promise<any>;
}
