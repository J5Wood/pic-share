"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function NavBackButton() {
    return ((0, jsx_runtime_1.jsx)("button", { className: "nav-back-button", onClick: function () { return window.history.back(); }, children: "BACK" }));
}
exports.default = NavBackButton;
