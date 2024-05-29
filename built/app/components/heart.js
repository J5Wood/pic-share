"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var likePost_1 = require("../actions/likePost");
function Heart(_a) {
    var session = _a.session, postLiked = _a.postLiked, postId = _a.postId;
    var router = (0, navigation_1.useRouter)();
    var _b = (0, react_1.useState)(postLiked), liked = _b[0], setLiked = _b[1];
    var id = postId;
    function renderHeart() {
        if (liked) {
            return "♥︎";
        }
        return "♡";
    }
    function handleClick() {
        setLiked(function (prevState) { return !prevState; });
        (0, likePost_1.default)(id, liked);
        if (router)
            router.refresh();
    }
    if (session) {
        return (<span className="heart" onClick={handleClick} role="heart">
        {renderHeart()}
      </span>);
    }
}
exports.default = Heart;
