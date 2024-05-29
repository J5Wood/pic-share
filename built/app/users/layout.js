"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navBackButton_1 = require("../components/navBackButton");
function UserLayout(_a) {
    var children = _a.children;
    return (<>
      <navBackButton_1.default />
      {children}
    </>);
}
exports.default = UserLayout;