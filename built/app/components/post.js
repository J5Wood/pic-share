"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = require("next/link");
var postImage_1 = require("./postImage");
var postContent_1 = require("./postContent");
var heart_1 = require("./heart");
var deletePostButton_1 = require("./deletePostButton");
function Post(_a) {
    var post = _a.post, liked = _a.liked, session = _a.session;
    function renderDeleteButton() {
        if (session && post.user_id === session.user.id) {
            return (0, jsx_runtime_1.jsx)(deletePostButton_1.default, { postId: post.id });
        }
    }
    if (post.url) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "post-card", role: "post", children: [(0, jsx_runtime_1.jsx)(link_1.default, { className: "post-card-link", href: "/posts/".concat(post.id.toString()), children: (0, jsx_runtime_1.jsx)(postImage_1.default, { postData: post }, "post-image-".concat(post.id)) }, "post-link-".concat(post.id)), (0, jsx_runtime_1.jsx)(postContent_1.default, { postData: post }, "post-content-".concat(post.id)), (0, jsx_runtime_1.jsx)(heart_1.default, { session: session, postLiked: liked, postId: post.id }), renderDeleteButton()] }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "post-card", children: [(0, jsx_runtime_1.jsx)("div", { className: "file-not-found", children: (0, jsx_runtime_1.jsx)("span", { className: "corner" }) }), "Image Not Found"] }));
    }
}
exports.default = Post;
