"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NavBackButton() {
    return (<button className="nav-back-button" onClick={function () { return window.history.back(); }}>
      BACK
    </button>);
}
exports.default = NavBackButton;
