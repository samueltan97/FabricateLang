"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
function moveSprite(id, xOffset, yOffset, time, animation, canSkip, promise) {
    $("#" + id).animate({
        "left": xOffset.toString(),
        "top": yOffset.toString(),
    }, time, animation, promise());
}
exports.moveSprite = moveSprite;
function flipHorizontally(id, time, animation, canSkip, promise) {
    $("#" + id).animate({
        "transform": "scaleX(-1)"
    }, time, animation, promise());
}
exports.flipHorizontally = flipHorizontally;
//# sourceMappingURL=CSSAnimation.js.map