"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSSAnimation_1 = require("./CSSAnimation");
var Character = /** @class */ (function () {
    function Character(id, imageURL, name, width, height, xOffset, yOffset, xAnchor, yAnchor, defDirIsLeft) {
        this.expressionDictionary = {};
        this.id = id;
        this.imageURL = imageURL;
        this.imageURL = imageURL;
        this.name = name;
        this.defName = name;
        this.width = width;
        this.defWidth = width;
        this.height = height;
        this.defHeight = height;
        this.xOffset = xOffset;
        this.defXOffset = xOffset;
        this.yOffset = yOffset;
        this.defYOffset = yOffset;
        this.xAnchor = xAnchor;
        this.defXAnchor = xAnchor;
        this.yAnchor - yAnchor;
        this.defYAnchor - yAnchor;
        this.defDirIsLeft = defDirIsLeft;
        this.currDirIsLeft = defDirIsLeft;
    }
    Character.prototype.addSprite = function (spriteName, imageURL) {
        this.expressionDictionary[spriteName] = imageURL;
    };
    Character.prototype.move = function (xOffset, yOffset, time, animation, canSkip, promise) {
        var animationTime = (typeof time === "number" && time >= 0) ? time : 0;
        var animationType = (typeof animation === "string") ? animation : "linear";
        var skippable = (typeof canSkip === "boolean") ? canSkip : true;
        this.xOffset = (typeof xOffset === "number") ? this.xOffset += xOffset : this.defXOffset;
        this.yOffset = (typeof yOffset === "number") ? this.yOffset += yOffset : this.defYOffset;
        if ((xOffset < 0 && !this.currDirIsLeft) || (xOffset > 0 && this.currDirIsLeft)) {
            CSSAnimation_1.flipHorizontally(this.id, 200, "linear", true, null);
        }
        CSSAnimation_1.moveSprite(this.id, this.xOffset, this.yOffset, animationTime, animationType, skippable, promise);
    };
    Character.prototype.moveTo = function (xPosition, time, animation, canSkip, promise) {
        var animationTime = (typeof time === "number" && time >= 0) ? time : 0;
        var animationType = (typeof animation === "string") ? animation : "linear";
        var skippable = (typeof canSkip === "boolean") ? canSkip : true;
        if ((this.xOffset > xPosition && !this.currDirIsLeft) || (this.xOffset < xPosition && this.currDirIsLeft)) {
            CSSAnimation_1.flipHorizontally(this.id, 200, "linear", true, null);
        }
        this.xOffset = (typeof xPosition === "number") ? xPosition : this.defXOffset;
        CSSAnimation_1.moveSprite(this.id, this.xOffset, this.yOffset, animationTime, animationType, skippable, promise);
    };
    return Character;
}());
exports.Character = Character;
//# sourceMappingURL=Character.js.map