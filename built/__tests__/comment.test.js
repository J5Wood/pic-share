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
var vitest_1 = require("vitest");
var react_1 = require("@testing-library/react");
var comment_1 = require("../app/components/comment");
(0, vitest_1.beforeAll)(function () {
    vitest_1.vi.mock("next/router", function () { return require("next-router-mock"); });
});
vitest_1.vi.mock("../app/actions/serverClient.js", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                default: vitest_1.vi.fn(function () {
                    return {
                        session: {
                            user: {
                                id: "3332ed8d-e2b5-422a-a329-45d127a36bc0",
                            },
                        },
                    };
                }),
            }];
    });
}); });
vitest_1.vi.mock("../app/components/deleteCommentButton.jsx", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                default: vitest_1.vi.fn(function () {
                    return (0, jsx_runtime_1.jsx)("button", { children: "Mocked delete button" });
                }),
            }];
    });
}); });
var commentData = {
    content: "neat",
    username: "dr.doom",
    id: 93,
    user_id: "3332ed8d-e2b5-422a-a329-45d127a36bc0",
};
(0, vitest_1.test)("Comment renders poster's username", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, content;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = react_1.render;
                return [4 /*yield*/, (0, comment_1.default)({ commentData: commentData })];
            case 1:
                _a.apply(void 0, [_b.sent()]);
                return [4 /*yield*/, react_1.screen.findByText("@dr.doom")];
            case 2:
                content = _b.sent();
                (0, vitest_1.expect)(content).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("Comment renders content", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, content;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = react_1.render;
                return [4 /*yield*/, (0, comment_1.default)({ commentData: commentData })];
            case 1:
                _a.apply(void 0, [_b.sent()]);
                return [4 /*yield*/, react_1.screen.findByText("neat")];
            case 2:
                content = _b.sent();
                (0, vitest_1.expect)(content).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.test)("Comment renders delete button with correct user id", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, content;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = react_1.render;
                return [4 /*yield*/, (0, comment_1.default)({ commentData: commentData })];
            case 1:
                _a.apply(void 0, [_b.sent()]);
                return [4 /*yield*/, react_1.screen.findByText("Mocked delete button")];
            case 2:
                content = _b.sent();
                (0, vitest_1.expect)(content).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });
