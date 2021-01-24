import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogPost, BlogPostSimple, BlogPostModel } from './post.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<BlogPostModel>,
  ) {}

  async getPosts(
    queryOptions: { published?: boolean; category?: string } = {},
  ): Promise<BlogPostSimple[]> {
    const posts = await this.postModel
      .find(queryOptions)
      .select(
        'slug title summary imageURL category createdDate likes published',
      )
      .lean()
      .exec();
    return posts;
  }

  async getPost(slug: string): Promise<BlogPost> {
    const post = await this.postModel.findOne({ slug }).lean().exec();
    return post;
  }

  async savePost(postBody: BlogPost): Promise<BlogPost> {
    const savedPost = await await this.postModel.create(postBody);
    return savedPost;
  }

  async updatePost(postBody: BlogPost): Promise<BlogPost> {
    const updatedPost = await this.postModel
      .findOneAndUpdate({ slug: postBody.slug }, postBody)
      .lean()
      .exec();
    return updatedPost;
  }

  async deletePost(postSlug: string): Promise<any> {
    const res = await this.postModel.deleteOne({ slug: postSlug }).exec();
    return res;
  }
}
