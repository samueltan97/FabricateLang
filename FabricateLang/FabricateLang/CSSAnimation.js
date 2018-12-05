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
function flipVertically(id, time, animation, canSkip, promise) {
    $("#" + id).animate({
        "transform": "scaleY(-1)"
    }, time, animation, promise());
}
exports.flipVertically = flipVertically;
function scaleSprite(id, scaleX, scaleY, time, animation, canSkip, promise) {
    $("#" + id).animate({
        "transform": "scale(" + scaleX + ", " + scaleY + ")"
    }, time, animation, promise());
}
exports.scaleSprite = scaleSprite;
//# sourceMappingURL=CSSAnimation.js.map