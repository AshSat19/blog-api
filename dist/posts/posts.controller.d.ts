import { BlogPost, BlogPostSimple } from './post.model';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    getDraftPosts(): Promise<BlogPostSimple[]>;
    getPublishedPosts(): Promise<BlogPostSimple[]>;
    getPostsByCategory(category: string): Promise<BlogPostSimple[]>;
    savePost(postBody: BlogPost): Promise<BlogPost>;
    updatePost(postBody: BlogPost): Promise<BlogPost>;
    deletePost(postSlug: string): Promise<BlogPost>;
}
