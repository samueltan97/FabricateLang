"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CSSAnimation_1 = require("./CSSAnimation");
var Entity = /** @class */ (function () {
    function Entity(id, imageURL, name, width, height, xOffset, yOffset, xAnchor, yAnchor) {
        this.id = id;
        this.defImageURL = imageURL;
        this.defName = name;
        this.defWidth = width;
        this.defHeight = height;
        this.defXOffset = xOffset;
        this.defYOffset = yOffset;
        this.defXAnchor = xAnchor;
        this.defYAnchor = yAnchor;
    }
    return Entity;
}());
exports.Entity = Entity;
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox(id, imageURL, width, height, xOffset, yOffset, xAnchor, yAnchor) {
        var _this = _super.call(this, id, imageURL, "", width, height, xOffset, yOffset, xAnchor, yAnchor) || this;
        _this.name = "";
        _this.text = "";
        _this.defNameFontSize = 1.5;
        _this.nameFontSize = 1.5;
        _this.defTextFontSize = 1.7;
        _this.textFontSize = 1.7;
        _this.isBold = false;
        _this.isItalic = false;
        _this.isSkippable = true;
        _this.isCentered = false;
        _this.textSpeed = 1;
        _this.fontColor = "black";
        return _this;
    }
    TextBox.prototype.setName = function (name) {
        try {
            if (typeof name !== "string" && typeof name !== "undefined")
                throw new Error("Input Name format is wrong. ");
            this.name = (typeof name === "string") ? name : "";
            CSSAnimation_1.setText(this.id + "-name", this.name);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.setNameFontSize = function (fontSize) {
        try {
            if (typeof fontSize !== "string" && typeof fontSize !== "undefined")
                throw new Error("Input Name Font Size format is wrong. ");
            this.nameFontSize = (typeof fontSize === "number") ? fontSize : 1.5;
            CSSAnimation_1.setFontSize(this.id + "-name", this.nameFontSize);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.setFontSize = function (fontSize) {
        try {
            if (typeof fontSize !== "string" && typeof fontSize !== "undefined")
                throw new Error("Input Name format is wrong. ");
            this.textFontSize = (typeof fontSize === "number") ? fontSize : 1.7;
            CSSAnimation_1.setFontSize(this.id + "-name", this.textFontSize);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.setBold = function (toBold) {
        try {
            if (typeof toBold !== "boolean" && typeof toBold !== "undefined")
                throw new Error("Input setBold format is wrong. ");
            this.isBold = (typeof toBold === "boolean") ? toBold : false;
            CSSAnimation_1.setBold(this.id + "-name", this.isBold);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.setItalic = function (toItalic) {
        try {
            if (typeof toItalic !== "boolean" && typeof toItalic !== "undefined")
                throw new Error("Input setItalic format is wrong. ");
            this.isItalic = (typeof toItalic === "boolean") ? toItalic : false;
            CSSAnimation_1.setItalic(this.id + "-name", this.isItalic);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.setSkippable = function (isSkippable) {
        try {
            if (typeof isSkippable !== "boolean" && typeof isSkippable !== "undefined")
                throw new Error("Input setSkippable format is wrong. ");
            this.isSkippable = (typeof isSkippable === "boolean") ? isSkippable : false;
            //need code
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.setCentered = function (isCentered) {
        try {
            if (typeof isCentered !== "boolean" && typeof isCentered !== "undefined")
                throw new Error("Input setCentered format is wrong. ");
            this.isSkippable = (typeof isCentered === "boolean") ? isCentered : false;
            CSSAnimation_1.setCentered(this.id + "-name", this.isSkippable);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.setTextSpeed = function (textSpeed) {
        try {
            if ((typeof textSpeed !== "number" && typeof textSpeed !== "undefined") || (typeof textSpeed === "number" && textSpeed <= 0))
                throw new Error("Input textSpeed format is wrong. ");
            this.textSpeed = (typeof textSpeed === "number" && textSpeed <= 0) ? textSpeed : 1;
            //need code
        }
        catch (e) {
            console.log(e.message);
        }
    };
    TextBox.prototype.hexadecimalCheck = function (char) {
        var hexadecimalChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
        if (hexadecimalChar.indexOf(char.toUpperCase()) < -1)
            return false;
        return true;
    };
    TextBox.prototype.isHexadecimalColorCode = function (colorCode) {
        var _this = this;
        var resultArray = colorCode.split("").filter(function (x) { return _this.hexadecimalCheck(x) == true; });
        if (resultArray.length == 6 && colorCode[0] == "#")
            return true;
        if (["red", "black", "blue", "green", "yellow", "white", "grey"].indexOf(colorCode) >= 0)
            return true;
        return false;
    };
    TextBox.prototype.setFontColor = function (fontColor) {
        try {
            if ((typeof fontColor !== "string" && typeof fontColor !== "undefined") || (typeof fontColor === "string" && !this.isHexadecimalColorCode(fontColor)))
                throw new Error("Input fontColor format is wrong. ");
            this.fontColor = (typeof fontColor === "string" && this.isHexadecimalColorCode(fontColor)) ? fontColor : "black";
        }
        catch (e) {
            console.log(e.message);
        }
    };
    return TextBox;
}(Entity));
exports.TextBox = TextBox;
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character(id, imageURL, name, width, height, xOffset, yOffset, xAnchor, yAnchor, defDirIsLeft, easingType) {
        var _this = _super.call(this, id, imageURL, name, width, height, xOffset, yOffset, xAnchor, yAnchor) || this;
        _this.expressionDictionary = {};
        _this.imageURL = imageURL;
        _this.name = name;
        _this.width = width;
        _this.height = height;
        _this.xOffset = xOffset;
        _this.yOffset = yOffset;
        _this.xAnchor = xAnchor;
        _this.yAnchor = yAnchor;
        _this.defDirIsLeft = defDirIsLeft;
        _this.currDirIsLeft = defDirIsLeft;
        _this.easingType = easingType;
        return _this;
    }
    Character.prototype.addSprite = function (spriteName, imageURL) {
        this.expressionDictionary[spriteName] = imageURL;
    };
    Character.prototype.isEasingValid = function (animation) {
        for (var type in this.easingType) {
            if (this.easingType[type] === animation) {
                return true;
            }
            return false;
        }
    };
    Character.prototype.argumentCheck = function (time, animation, canSkip) {
        var errorMessage = "";
        if (typeof time !== "undefined" && this.animationTimeCheck(time) == 0) {
            errorMessage += "Input Time Format is wrong. ";
        }
        if (typeof animation !== "string" && typeof time !== "undefined") {
            errorMessage += "Input Easing Format is wrong. ";
        }
        if (typeof animation === "string" && !this.isEasingValid(animation)) {
            errorMessage += "Input Easing does not exist. ";
        }
        if (typeof canSkip !== "boolean" && typeof canSkip !== "undefined") {
            errorMessage += "Input Skippable Format is wrong. ";
        }
        if (errorMessage.length > 0) {
            throw new Error(errorMessage);
        }
    };
    Character.prototype.animationTimeCheck = function (time) {
        if (typeof time === "number" && time >= 0) {
            return time;
        }
        else {
            return 0;
        }
    };
    Character.prototype.animationEasingCheck = function (animation) {
        if (typeof animation === "string" && this.isEasingValid(animation)) {
            return animation;
        }
        else {
            return "swing";
        }
    };
    Character.prototype.animationSkippableCheck = function (canSkip) {
        if (typeof canSkip === "undefined" || canSkip) {
            return true;
        }
        else {
            return false;
        }
    };
    Character.prototype.ensureMinOneArgument = function (value) {
        if (typeof value === "number" && value > 0) {
            return value;
        }
        else {
            return 1;
        }
    };
    Character.prototype.move = function (xOffset, yOffset, time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (typeof xOffset !== "number" && typeof xOffset !== "undefined")
                throw new Error("Input xOffset is in wrong format. ");
            if (typeof yOffset !== "number" && typeof yOffset !== "undefined")
                throw new Error("Input yOffset is in wrong format. ");
            this.xOffset = (typeof xOffset === "number") ? this.xOffset += xOffset : this.defXOffset;
            this.yOffset = (typeof yOffset === "number") ? this.yOffset += yOffset : this.defYOffset;
            if ((xOffset < 0 && !this.currDirIsLeft) || (xOffset > 0 && this.currDirIsLeft)) {
                CSSAnimation_1.flipHorizontally(this.id, 200, "linear", true, null);
            }
            CSSAnimation_1.moveSprite(this.id, this.xOffset, this.yOffset, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.moveTo = function (xPosition, time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (typeof xPosition !== "number" && typeof xPosition !== "undefined")
                throw new Error("Input xPosition is in wrong format. ");
            if ((this.xOffset > xPosition && !this.currDirIsLeft) || (this.xOffset < xPosition && this.currDirIsLeft)) {
                CSSAnimation_1.flipHorizontally(this.id, 200, "swing", true, null);
            }
            this.xOffset = (typeof xPosition === "number") ? xPosition : this.defXOffset;
            CSSAnimation_1.moveSprite(this.id, this.xOffset, this.yOffset, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.scaleKeepRatio = function (ratio, time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            if ((typeof ratio !== "number" && typeof ratio !== "undefined") || (typeof ratio === "number" && ratio <= 0))
                throw new Error("Input Ratio is in wrong format. ");
            this.height = this.height * this.ensureMinOneArgument(ratio);
            this.width = this.width * this.ensureMinOneArgument(ratio);
            CSSAnimation_1.scaleSprite(this.id, this.ensureMinOneArgument(ratio), this.ensureMinOneArgument(ratio), this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.scale = function (xRatio, yRatio, time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            if ((typeof xRatio !== "number" && typeof xRatio !== "undefined") || (typeof xRatio === "number" && xRatio <= 0))
                throw new Error("Input xRatio is in wrong format. ");
            if ((typeof yRatio !== "number" && typeof yRatio !== "undefined") || (typeof yRatio === "number" && yRatio <= 0))
                throw new Error("Input yRatio is in wrong format. ");
            this.height = this.height * this.ensureMinOneArgument(yRatio);
            this.width = this.width * this.ensureMinOneArgument(xRatio);
            CSSAnimation_1.scaleSprite(this.id, this.ensureMinOneArgument(xRatio), this.ensureMinOneArgument(yRatio), this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.turnAround = function (time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            this.currDirIsLeft = !this.currDirIsLeft;
            CSSAnimation_1.flipHorizontally(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.turnLeft = function (time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (!this.currDirIsLeft) {
                CSSAnimation_1.flipHorizontally(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
                this.currDirIsLeft = true;
            }
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.turnRight = function (time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (this.currDirIsLeft) {
                CSSAnimation_1.flipHorizontally(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
                this.currDirIsLeft = false;
            }
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.flipVertically = function (time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            CSSAnimation_1.flipVertically(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.turnBackAndForth = function (interval, finalDirIsLeft, totalTime, time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
            if ((typeof interval !== "number" && typeof interval !== "undefined") || (typeof interval === "number" && interval <= 0))
                throw new Error("Input Interval is in wrong format. ");
            if ((typeof totalTime !== "number" && typeof totalTime !== "undefined") || (typeof totalTime === "number" && totalTime <= 0))
                throw new Error("Input Total Time is in wrong format. ");
            if (typeof finalDirIsLeft !== "boolean" && typeof finalDirIsLeft !== "undefined")
                throw new Error("Input Final Direction Is Left is in wrong format. ");
            if (typeof totalTime === "undefined") {
                var character_1 = this;
                setInterval(function () {
                    CSSAnimation_1.flipHorizontally(character_1.id, character_1.animationTimeCheck(time), character_1.animationEasingCheck(animation), character_1.animationSkippableCheck(canSkip), promise);
                    character_1.currDirIsLeft = !character_1.currDirIsLeft;
                }, interval);
                if (typeof finalDirIsLeft === "boolean") {
                    throw new Error("Final Direction cannot be set for turns which has an unknown stop time. Decide the final direction at the start of the next frame. ");
                }
            }
            else if (typeof totalTime === "number" && typeof finalDirIsLeft === "boolean" && totalTime > 0) {
                var startCounter_1 = 0;
                var maxCounter_1 = totalTime / interval;
                var character_2 = this;
                var rotationExercise_1 = setInterval(function () {
                    CSSAnimation_1.flipHorizontally(character_2.id, character_2.animationTimeCheck(time), character_2.animationEasingCheck(animation), character_2.animationSkippableCheck(canSkip), promise);
                    character_2.currDirIsLeft = !character_2.currDirIsLeft;
                    startCounter_1 += 1;
                    if (startCounter_1 == maxCounter_1) {
                        clearInterval(rotationExercise_1);
                        if (this.currDirIsLeft != finalDirIsLeft) {
                            CSSAnimation_1.flipHorizontally(character_2.id, character_2.animationTimeCheck(time), character_2.animationEasingCheck(animation), character_2.animationSkippableCheck(canSkip), promise);
                            character_2.currDirIsLeft = finalDirIsLeft;
                        }
                    }
                }, interval);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    };
    Character.prototype.say = function (text, time, animation, canSkip, promise) {
        try {
            this.argumentCheck(time, animation, canSkip);
        }
        catch (e) {
            console.log(e.message);
        }
    };
    return Character;
}(Entity));
exports.Character = Character;
//# sourceMappingURL=Character.js.map