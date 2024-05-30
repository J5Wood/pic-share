"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var navBackButton_1 = require("../components/navBackButton");
function UserLayout(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(navBackButton_1.default, {}), children] }));
}
exports.default = UserLayout;
