"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function ErrorComponent(_a) {
    var error = _a.error;
    (0, react_1.useEffect)(function () {
        console.error(error);
    }, [error]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "error-component", children: [(0, jsx_runtime_1.jsx)("h2", { children: "We're Sorry!" }), (0, jsx_runtime_1.jsx)("p", { children: "Something seems to have gone wrong." }), (0, jsx_runtime_1.jsx)("p", { children: "Please click the try again button, or try refreshing the page." }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return window.location.reload(); }, children: "Try again" })] }));
}
exports.default = ErrorComponent;
