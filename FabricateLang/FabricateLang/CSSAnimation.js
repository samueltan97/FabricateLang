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
function setText(id, text) {
    $("#" + id).text(text);
}
exports.setText = setText;
function setFontSize(id, fontSize) {
    $("#" + id).css("font-size", fontSize.toString() + "vw");
}
exports.setFontSize = setFontSize;
function setBold(id, toBold) {
    var fontWeight = (toBold) ? "800" : "400";
    $("#" + id).css("font-weight", fontWeight);
}
exports.setBold = setBold;
function setItalic(id, toItalic) {
    var fontItalic = (toItalic) ? "italic" : "normal";
    $("#" + id).css("font-style", fontItalic);
}
exports.setItalic = setItalic;
function setCentered(id, toCentered) {
    var isCentered = (toCentered) ? "isCentered" : "";
    $("#" + id).removeClass("isCentered").addClass(isCentered);
}
exports.setCentered = setCentered;
function setFontColor(id, fontColor) {
    $("#" + id).css("color", fontColor);
}
exports.setFontColor = setFontColor;
//# sourceMappingURL=CSSAnimation.js.map