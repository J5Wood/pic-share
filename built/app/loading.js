"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("next/image");
function Loading() {
    return (<div className="loading-component">
      <image_1.default src="/skull.png" alt="loading screen skull" width={230} height={220}/>
      <p>loading...</p>
    </div>);
}
exports.default = Loading;
