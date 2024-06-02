"use client"; // Error components must be Client Components
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorComponent_1 = require("./components/errorComponent");
function Error(_a) {
    var error = _a.error, reset = _a.reset;
    return (0, errorComponent_1.default)(error, reset);
}
exports.default = Error;
