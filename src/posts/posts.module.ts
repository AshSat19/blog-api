import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPostSchema } from './post.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: BlogPostSchema }])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
