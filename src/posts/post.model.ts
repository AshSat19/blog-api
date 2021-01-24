import * as mongoose from 'mongoose';

export const BlogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String },
  category: { type: String },
  content: { type: String },
  summary: { type: String },
  imageURL: { type: String },
  createdDate: { type: Number, default: Date.now() },
  published: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
});

BlogPostSchema.index({ title: 'text', content: 'text', summary: 'text' });

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  content: string;
  summary?: string;
  imageURL?: string;
  createdDate: number;
  published: boolean;
  likes?: number;
}

export interface BlogPostModel extends mongoose.Document {
  slug: string;
  title: string;
  category: string;
  content: string;
  summary?: string;
  imageURL?: string;
  createdDate: number;
  published: boolean;
  likes?: number;
}

export interface BlogPostSimple {
  slug: string;
  title: string;
  category: string;
  summary?: string;
  imageURL?: string;
  createdDate: number;
  likes?: number;
}
