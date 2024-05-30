"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var serverClient_1 = require("../../actions/serverClient");
var postComments_1 = require("../../actions/postComments");
var commentForm_1 = require("../../commentForm");
var getPost_1 = require("@/app/actions/getPost");
var post_1 = require("@/app/components/post");
function Page(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        function renderCommentForm(id) {
            if (session) {
                return (0, jsx_runtime_1.jsx)(commentForm_1.default, { postIdData: id });
            }
        }
        var session, post, liked, _i, _c, like;
        var slug = _b.params.slug;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, (0, serverClient_1.default)()];
                case 1:
                    session = (_d.sent()).session;
                    return [4 /*yield*/, (0, getPost_1.default)(slug)];
                case 2:
                    post = _d.sent();
                    if (post && post.url) {
                        liked = false;
                        if (!!post.likes && !!post.likes[0]) {
                            for (_i = 0, _c = post.likes; _i < _c.length; _i++) {
                                like = _c[_i];
                                if (session && like.user_id === session.user.id) {
                                    liked = true;
                                    break;
                                }
                            }
                        }
                        return [2 /*return*/, ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "post-container", children: (0, jsx_runtime_1.jsx)(post_1.default, { liked: liked, post: post, session: session }) }), (0, jsx_runtime_1.jsx)(postComments_1.default, { postIdData: post.id }), renderCommentForm(post.id)] }))];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = Page;
