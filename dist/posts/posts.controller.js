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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postService) {
        this.postService = postService;
    }
    async getDraftPosts() {
        const query = { published: false };
        const draftPosts = await this.postService.getPosts(query);
        return draftPosts;
    }
    async getPublishedPosts() {
        const query = { published: true };
        const publishedPosts = await this.postService.getPosts(query);
        return publishedPosts;
    }
    async getPostsByCategory(category) {
        const query = { published: true, category };
        const publishedPosts = await this.postService.getPosts(query);
        return publishedPosts;
    }
    async savePost(postBody) {
        const savedPost = await this.postService.savePost(postBody);
        return savedPost;
    }
    async updatePost(postBody) {
        const updatedPost = await this.postService.savePost(postBody);
        return updatedPost;
    }
    async deletePost(postSlug) {
        const updatedPost = await this.postService.deletePost(postSlug);
        return updatedPost;
    }
};
__decorate([
    common_1.Get('draft'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getDraftPosts", null);
__decorate([
    common_1.Get('published'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPublishedPosts", null);
__decorate([
    common_1.Get(':category'),
    __param(0, common_1.Param('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPostsByCategory", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "savePost", null);
__decorate([
    common_1.Put(':postSlug'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePost", null);
__decorate([
    common_1.Delete(':postSlug'),
    __param(0, common_1.Param('postSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "deletePost", null);
PostsController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map