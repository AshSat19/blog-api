"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostSchema = void 0;
const mongoose = require("mongoose");
exports.BlogPostSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String },
    category: { type: String },
    content: { type: String },
    summary: { type: String },
    imageURL: { type: String },
    createdDate: { type: Number, default: Date.now() },
    published: { type: Boolean, default: false },
});
//# sourceMappingURL=post.model.js.map