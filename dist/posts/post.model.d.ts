import * as mongoose from 'mongoose';
export declare const BlogPostSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface BlogPost {
    slug: string;
    title: string;
    category: string;
    content: string;
    summary?: string;
    imageURL?: string;
    createdDate: Date;
    published: boolean;
}
export interface BlogPostModel extends mongoose.Document {
    slug: string;
    title: string;
    category: string;
    content: string;
    summary?: string;
    imageURL?: string;
    createdDate: Date;
    published: boolean;
}
export interface BlogPostSimple {
    slug: string;
    title: string;
    category: string;
    summary?: string;
    imageURL?: string;
    createdDate: Date;
}
