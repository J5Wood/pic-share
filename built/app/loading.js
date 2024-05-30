"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var image_1 = require("next/image");
function Loading() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "loading-component", children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: "/skull.png", alt: "loading screen skull", width: 230, height: 220 }), (0, jsx_runtime_1.jsx)("p", { children: "loading..." })] }));
}
exports.default = Loading;
