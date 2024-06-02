"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var image_1 = require("next/image");
function PostImage(_a) {
    var postData = _a.postData;
    var postDate = postData["inserted_at"];
    var correctedDate = postDate.slice(5, 10) + "-" + postDate.slice(0, 4);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(image_1.default, { src: postData.url, width: 250, height: 250, alt: "Photo by ".concat(postData.username, " on ").concat(correctedDate), role: "post-image" }) }));
}
exports.default = PostImage;
