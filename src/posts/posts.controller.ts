import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogPost, BlogPostSimple } from './post.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('draft')
  async getDraftPosts(): Promise<BlogPostSimple[]> {
    const query = { published: false };
    const draftPosts = await this.postService.getPosts(query);
    return draftPosts;
  }

  @Get('published')
  async getPublishedPosts(): Promise<BlogPostSimple[]> {
    const query = { published: true };
    const publishedPosts = await this.postService.getPosts(query);
    return publishedPosts;
  }

  @Get(':category')
  async getPostsByCategory(
    @Param('category') category: string,
  ): Promise<BlogPostSimple[]> {
    const query = { published: true, category };
    const publishedPosts = await this.postService.getPosts(query);
    return publishedPosts;
  }

  @Post()
  async savePost(@Body() postBody: BlogPost): Promise<BlogPost> {
    const savedPost = await this.postService.savePost(postBody);
    return savedPost;
  }

  @Put(':postSlug')
  async updatePost(@Body() postBody: BlogPost): Promise<BlogPost> {
    const updatedPost = await this.postService.savePost(postBody);
    return updatedPost;
  }

  @Delete(':postSlug')
  async deletePost(@Param('postSlug') postSlug: string): Promise<BlogPost> {
    const updatedPost = await this.postService.deletePost(postSlug);
    return updatedPost;
  }
}
