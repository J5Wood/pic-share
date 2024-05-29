"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
function PostContent(_a) {
    var postData = _a.postData;
    var postId = postData.id.toString();
    return (<link_1.default className="username-link" href={"/users/".concat(postData.username)} key={postId.padStart(postId.length + 7, "content")} role="post-content">
      <h4>@{postData.username}: </h4>
      <p>{postData.content}</p>
    </link_1.default>);
}
exports.default = PostContent;
