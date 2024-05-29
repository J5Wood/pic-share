"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function ErrorComponent(_a) {
    var error = _a.error;
    (0, react_1.useEffect)(function () {
        console.error(error);
    }, [error]);
    return (<div className="error-component">
      <h2>We&apos;re Sorry!</h2>
      <p>Something seems to have gone wrong.</p>
      <p>Please click the try again button, or try refreshing the page.</p>
      <button onClick={function () { return window.location.reload(); }}>Try again</button>
    </div>);
}
exports.default = ErrorComponent;
