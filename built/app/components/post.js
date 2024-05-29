"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var postImage_1 = require("./postImage");
var postContent_1 = require("./postContent");
var heart_1 = require("./heart");
var deletePostButton_1 = require("./deletePostButton");
function Post(_a) {
    var post = _a.post, liked = _a.liked, session = _a.session;
    function renderDeleteButton() {
        if (session && post.user_id === session.user.id) {
            return <deletePostButton_1.default postId={post.id}/>;
        }
    }
    if (post.url) {
        return (<div className="post-card" role="post">
        <link_1.default className="post-card-link" href={"/posts/".concat(post.id.toString())} key={"post-link-".concat(post.id)}>
          <postImage_1.default postData={post} key={"post-image-".concat(post.id)}/>
        </link_1.default>
        <postContent_1.default postData={post} key={"post-content-".concat(post.id)}/>
        <heart_1.default session={session} postLiked={liked} postId={post.id}/>
        {renderDeleteButton()}
      </div>);
    }
    else {
        return (<div className="post-card">
        <div className="file-not-found">
          <span className="corner"></span>
        </div>
        Image Not Found
      </div>);
    }
}
exports.default = Post;
