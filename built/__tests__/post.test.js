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
var post_1 = require("../app/components/post");
var vitest_1 = require("vitest");
var react_1 = require("@testing-library/react");
var postData = {
    url: "https://jeremywood.tech/_astro/bust.ed0c9b3a.png",
    liked: true,
    session: true,
    id: 12,
    user_id: 12,
    inserted_at: "2023-07-31 21:23:14.725161+00",
    username: "Billiam",
    content: "Magna fringilla urna porttitor rhoncus dolor purus.",
};
vitest_1.vi.mock("../app/components/deletePostButton.jsx", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                default: vitest_1.vi.fn(function () {
                    return <button>Mocked Delete Button</button>;
                }),
            }];
    });
}); });
(0, vitest_1.test)("A post should display an image", function () { return __awaiter(void 0, void 0, void 0, function () {
    var postImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, react_1.render)(<post_1.default post={postData}/>);
                return [4 /*yield*/, react_1.screen.getByRole("post-image")];
            case 1:
                postImage = _a.sent();
                (0, vitest_1.expect)(postImage).toBeDefined();
                (0, vitest_1.expect)(postImage.src).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("A post should list the poster and content", function () { return __awaiter(void 0, void 0, void 0, function () {
    var postContent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, react_1.render)(<post_1.default post={postData}/>);
                return [4 /*yield*/, react_1.screen.getByRole("post-content")];
            case 1:
                postContent = _a.sent();
                (0, vitest_1.expect)(postContent).toBeDefined();
                (0, vitest_1.expect)(postContent.children[0].innerHTML).toMatch("@Billiam");
                (0, vitest_1.expect)(postContent.children[1].innerHTML).toMatch("Magna fringilla urna porttitor rhoncus dolor purus.");
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("A post should render a delete button when that user is logged in", function () { return __awaiter(void 0, void 0, void 0, function () {
    var content;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, react_1.render)(<post_1.default post={postData} session={{ user: { id: 12 } }} liked={true}/>);
                return [4 /*yield*/, react_1.screen.findByText("Mocked Delete Button")];
            case 1:
                content = _a.sent();
                (0, vitest_1.expect)(content).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("A post should render a heart when there is a session", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, react_1.render)(<post_1.default post={postData} session={{ user: { id: 10 } }} liked={true}/>);
        (0, vitest_1.expect)(react_1.screen.getByRole("heart")).toBeDefined();
        return [2 /*return*/];
    });
}); });
(0, vitest_1.test)("A post should not render a heart when there is no session", function () { return __awaiter(void 0, void 0, void 0, function () {
    var heart;
    return __generator(this, function (_a) {
        (0, react_1.render)(<post_1.default post={postData} session={false} liked={false}/>);
        heart = react_1.screen.queryByRole("heart");
        (0, vitest_1.expect)(heart).toBe(null);
        return [2 /*return*/];
    });
}); });
