"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./globals.css");
var google_1 = require("next/font/google");
var header_1 = require("./header");
var lato = (0, google_1.Lato)({ subsets: ["latin"], weight: "400" });
exports.metadata = {
    title: "Pic Share",
    description: "The Image Sharing Site",
};
function RootLayout(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", children: (0, jsx_runtime_1.jsxs)("body", { className: lato.className, children: [(0, jsx_runtime_1.jsx)("div", { className: "main-header", children: (0, jsx_runtime_1.jsx)("a", { className: "main-header-link", href: "/", children: (0, jsx_runtime_1.jsx)("h1", { children: "PIC SHARE" }) }) }), (0, jsx_runtime_1.jsx)(header_1.default, {}), (0, jsx_runtime_1.jsx)("main", { role: "main", children: children })] }) }));
}
exports.default = RootLayout;
