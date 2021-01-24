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

  @Get('categories/:category')
  async getPostsByCategory(
    @Param('category') category: string,
  ): Promise<BlogPostSimple[]> {
    const query = { published: true, category };
    const publishedPosts = await this.postService.getPosts(query);
    return publishedPosts;
  }

  @Get('search/:category/:searchString')
  async searchPosts(
    @Param('category') category: string,
    @Param('searchString') searchString: string,
  ): Promise<BlogPostSimple[]> {
    const searchRegex = new RegExp(searchString || '', 'i');
    let query: Object = {
      published: true,
      $or: [
        { title: searchRegex },
        { summary: searchRegex },
        { content: searchRegex },
      ],
    };
    if (category !== 'ALL') query = { ...query, category };
    const publishedPosts = await this.postService.getPosts(query);
    return publishedPosts;
  }

  @Get(':slug')
  async getPostBySlug(@Param('slug') slug: string): Promise<BlogPost> {
    const post = await this.postService.getPost(slug);
    return post;
  }

  @Post()
  async savePost(@Body() postBody: BlogPost): Promise<BlogPost> {
    const savedPost = await this.postService.savePost(postBody);
    return savedPost;
  }

  @Put(':postSlug')
  async updatePost(@Body() postBody: BlogPost): Promise<BlogPost> {
    const updatedPost = await this.postService.updatePost(postBody);
    return updatedPost;
  }

  @Put('like/:postSlug')
  async likePost(@Body() postBody: BlogPost): Promise<BlogPost> {
    postBody.likes += 1;
    const updatedPost = await this.postService.updatePost(postBody);
    return updatedPost;
  }

  @Delete(':postSlug')
  async deletePost(@Param('postSlug') postSlug: string): Promise<BlogPost> {
    const updatedPost = await this.postService.deletePost(postSlug);
    return updatedPost;
  }
}
