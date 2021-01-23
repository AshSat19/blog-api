"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PostsService = class PostsService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async getPosts(queryOptions = {}) {
        const posts = await this.postModel
            .find(queryOptions)
            .select('slug title summary imageURL category createdDate published')
            .lean()
            .exec();
        return posts;
    }
    async getPost(slug) {
        const post = await this.postModel.findOne({ slug }).lean().exec();
        return post;
    }
    async savePost(postBody) {
        const savedPost = await this.postModel.create(postBody);
        return savedPost;
    }
    async updatePost(postBody) {
        const updatedPost = await this.postModel.updateOne({ slug: postBody.slug }, postBody);
        return updatedPost;
    }
    async deletePost(postSlug) {
        const res = await this.postModel.deleteOne({ slug: postSlug });
        return res;
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Post')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map