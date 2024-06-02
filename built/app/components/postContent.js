"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = require("next/link");
function PostContent(_a) {
    var postData = _a.postData;
    var postId = postData.id.toString();
    return ((0, jsx_runtime_1.jsxs)(link_1.default, { className: "username-link", href: "/users/".concat(postData.username), role: "post-content", children: [(0, jsx_runtime_1.jsxs)("h4", { children: ["@", postData.username, ": "] }), (0, jsx_runtime_1.jsx)("p", { children: postData.content })] }, postId.padStart(postId.length + 7, "content")));
}
exports.default = PostContent;
