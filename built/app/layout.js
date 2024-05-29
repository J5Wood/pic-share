"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
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
    return (<html lang="en">
      <body className={lato.className}>
        <div className="main-header">
          <a className="main-header-link" href="/">
            <h1>PIC SHARE</h1>
          </a>
        </div>
        <header_1.default />
        <main role="main">{children}</main>
      </body>
    </html>);
}
exports.default = RootLayout;
