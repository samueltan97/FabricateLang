import { moveSprite, flipHorizontally, scaleSprite, flipVertically, setText, setFontSize, setBold, setItalic, setCentered } from "./CSSAnimation";

export class Entity {
    readonly id: string;
    readonly defImageURL: string;
    protected defName: string;
    protected defWidth: number;
    protected defHeight: number;
    protected defXOffset: number;
    protected defYOffset: number;
    protected defXAnchor: number; // set transform origin during creation of character in js
    protected defYAnchor: number; // set transform origin during creation of character in js

    constructor(id: string, imageURL: string, name: string, width: number, height: number, xOffset: number, yOffset: number, xAnchor: number, yAnchor: number) {
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
}

export class TextBox extends Entity {
    private name: string = "";
    private text: string = "";
    private defNameFontSize: number = 1.5;
    private nameFontSize: number = 1.5;
    private defTextFontSize: number = 1.7;
    private textFontSize: number = 1.7;
    private isBold: boolean = false;
    private isItalic: boolean = false;
    private isSkippable: boolean = true;
    private isCentered: boolean = false;
    private textSpeed: number = 1;
    private fontColor: string = "black";

    constructor(id: string, imageURL: string, width: number, height: number, xOffset: number, yOffset: number, xAnchor: number, yAnchor: number) {
        super(id, imageURL, "", width, height, xOffset, yOffset, xAnchor, yAnchor);
    }

    setName(name?: string): void {
        try {
            if (typeof name !== "string" && typeof name !== "undefined") throw new Error("Input Name format is wrong. ");
            this.name = (typeof name === "string") ? name : "";
            setText(this.id + "-name", this.name);
        } catch (e) {
            console.log(e.message);
        }
    }

    setNameFontSize(fontSize?: number):void {
        try {
            if (typeof fontSize !== "string" && typeof fontSize !== "undefined") throw new Error("Input Name Font Size format is wrong. ");
            this.nameFontSize = (typeof fontSize === "number") ? fontSize : 1.5;
            setFontSize(this.id + "-name", this.nameFontSize);
        } catch (e) {
            console.log(e.message);
        }
    }

    setFontSize(fontSize?: number): void {
        try {
            if (typeof fontSize !== "string" && typeof fontSize !== "undefined") throw new Error("Input Name format is wrong. ");
            this.textFontSize = (typeof fontSize === "number") ? fontSize : 1.7;
            setFontSize(this.id + "-name", this.textFontSize);
        } catch (e) {
            console.log(e.message);
        }
    }

    setBold(toBold?: boolean): void {
        try {
            if (typeof toBold !== "boolean" && typeof toBold !== "undefined") throw new Error("Input setBold format is wrong. ");
            this.isBold = (typeof toBold === "boolean") ? toBold : false;
            setBold(this.id + "-name", this.isBold);
        } catch (e) {
            console.log(e.message);
        }
    }

    setItalic(toItalic?: boolean): void {
        try {
            if (typeof toItalic !== "boolean" && typeof toItalic !== "undefined") throw new Error("Input setItalic format is wrong. ");
            this.isItalic = (typeof toItalic === "boolean") ? toItalic : false;
            setItalic(this.id + "-name", this.isItalic);
        } catch (e) {
            console.log(e.message);
        }
    }

    setSkippable(isSkippable?: boolean): void {
        try {
            if (typeof isSkippable !== "boolean" && typeof isSkippable !== "undefined") throw new Error("Input setSkippable format is wrong. ");
            this.isSkippable = (typeof isSkippable === "boolean") ? isSkippable : false;
            //need code
        } catch (e) {
            console.log(e.message);
        }
    }

    setCentered(isCentered?: boolean): void {
        try {
            if (typeof isCentered !== "boolean" && typeof isCentered !== "undefined") throw new Error("Input setCentered format is wrong. ");
            this.isSkippable = (typeof isCentered === "boolean") ? isCentered : false;
            setCentered(this.id + "-name", this.isSkippable);
        } catch (e) {
            console.log(e.message);
        }
    }

    setTextSpeed(textSpeed?: number): void {
        try {
            if ((typeof textSpeed !== "number" && typeof textSpeed !== "undefined") || (typeof textSpeed === "number" && textSpeed <= 0)) throw new Error("Input textSpeed format is wrong. ");
            this.textSpeed = (typeof textSpeed === "number" && textSpeed <= 0) ? textSpeed : 1;
            //need code
        } catch (e) {
            console.log(e.message);
        }
    }

    hexadecimalCheck(char: string):boolean {
        let hexadecimalChar: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
        if (hexadecimalChar.indexOf(char.toUpperCase()) < -1)  return false;
        return true;
    }

    isHexadecimalColorCode(colorCode: string):boolean {
        let resultArray: string[] = colorCode.split("").filter(x => this.hexadecimalCheck(x) == true);
        if (resultArray.length == 6 && colorCode[0] == "#") return true;
        if (["red", "black", "blue", "green", "yellow", "white", "grey"].indexOf(colorCode) >= 0) return true;
        return false;
    }

    setFontColor(fontColor?: string): void {
        try {
            if ((typeof fontColor !== "string" && typeof fontColor !== "undefined") || (typeof fontColor === "string" && !this.isHexadecimalColorCode(fontColor))) throw new Error("Input fontColor format is wrong. ");
            this.fontColor = (typeof fontColor === "string" && this.isHexadecimalColorCode(fontColor)) ? fontColor : "black";
        } catch (e) {
            console.log(e.message);
        }
    }
}

export class Character extends Entity {
    private defDirIsLeft: boolean;
    private imageURL: string;
    private name: string;
    private width: number;
    private height: number;
    private xOffset: number;
    private yOffset: number;
    private xAnchor: number;
    private yAnchor: number;
    private currDirIsLeft: boolean;
    private expressionDictionary: { [id: string]: string } = {};
    private easingType: string[];

    constructor(id:string, imageURL:string, name:string, width:number, height:number, xOffset:number, yOffset:number, xAnchor:number, yAnchor:number, defDirIsLeft:boolean, easingType:string[]) {
        super(id, imageURL, name, width, height, xOffset, yOffset, xAnchor, yAnchor);
        this.imageURL = imageURL;
        this.name = name;
        this.width = width;
        this.height = height;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.xAnchor = xAnchor;
        this.yAnchor = yAnchor;
        this.defDirIsLeft = defDirIsLeft;
        this.currDirIsLeft = defDirIsLeft;
        this.easingType = easingType;
    }

    addSprite(spriteName: string, imageURL: string):void {
        this.expressionDictionary[spriteName] = imageURL;
    }

    isEasingValid(animation:string): boolean {
        for (var type in this.easingType) {
            if (this.easingType[type] === animation) {
                return true;
            }
            return false;
        }
    }

    argumentCheck(time?: number, animation?: string, canSkip?: boolean): void {
        let errorMessage:string = "";
        if (typeof time !== "undefined" && this.animationTimeCheck(time) == 0) {
            errorMessage +="Input Time Format is wrong. ";
        }
        if (typeof animation !== "string" && typeof time !== "undefined") {
            errorMessage +="Input Easing Format is wrong. ";
        }
        if (typeof animation === "string" && !this.isEasingValid(animation)) {
            errorMessage +="Input Easing does not exist. ";
        }
        if (typeof canSkip !== "boolean" && typeof canSkip !== "undefined") {
            errorMessage +="Input Skippable Format is wrong. ";
        }
        if (errorMessage.length > 0) {
            throw new Error(errorMessage);
        } 
    }

    animationTimeCheck(time?: number): number {
        if (typeof time === "number" && time >= 0) {
            return time;
        } else {
            return 0;
        }
    }

    animationEasingCheck(animation?: string): string {
        if (typeof animation === "string" && this.isEasingValid(animation)) {
            return animation;
        } else {
            return "swing";
        }
    }

    animationSkippableCheck(canSkip?: boolean): boolean {
        if (typeof canSkip === "undefined" || canSkip) {
            return true;
        } else {
            return false;
        }
    }

    ensureMinOneArgument(value: number): number {
        if (typeof value === "number" && value > 0) {
            return value;
        } else {
            return 1;
        }
    }


    move(xOffset?: number, yOffset?: number, time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (typeof xOffset !== "number" && typeof xOffset !== "undefined") throw new Error("Input xOffset is in wrong format. ")
            if (typeof yOffset !== "number" && typeof yOffset !== "undefined") throw new Error("Input yOffset is in wrong format. ")
            this.xOffset = (typeof xOffset === "number") ? this.xOffset += xOffset : this.defXOffset;
            this.yOffset = (typeof yOffset === "number") ? this.yOffset += yOffset : this.defYOffset;
            if ((xOffset < 0 && !this.currDirIsLeft) || (xOffset > 0 && this.currDirIsLeft)) {
                flipHorizontally(this.id, 200, "linear", true, null);
            }
            moveSprite(this.id, this.xOffset, this.yOffset, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        } catch (e) {
            console.log(e.message);
        }
    }

    moveTo(xPosition?: number, time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (typeof xPosition !== "number" && typeof xPosition !== "undefined") throw new Error("Input xPosition is in wrong format. ")
            if ((this.xOffset > xPosition && !this.currDirIsLeft) || (this.xOffset < xPosition && this.currDirIsLeft)) {
                flipHorizontally(this.id, 200, "swing", true, null);
            }
            this.xOffset = (typeof xPosition === "number") ? xPosition : this.defXOffset;
            moveSprite(this.id, this.xOffset, this.yOffset, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        } catch (e) {
            console.log(e.message);
        }

    }

    scaleKeepRatio(ratio?: number, time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            if ((typeof ratio !== "number" && typeof ratio !== "undefined") || (typeof ratio === "number" && ratio <= 0)) throw new Error("Input Ratio is in wrong format. ")
            this.height = this.height * this.ensureMinOneArgument(ratio);
            this.width = this.width * this.ensureMinOneArgument(ratio);
            scaleSprite(this.id, this.ensureMinOneArgument(ratio), this.ensureMinOneArgument(ratio), this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        } catch (e) {
            console.log(e.message);
        }
    }

    scale(xRatio?: number, yRatio?: number, time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            if ((typeof xRatio !== "number" && typeof xRatio !== "undefined") || (typeof xRatio === "number" && xRatio <=0 )) throw new Error("Input xRatio is in wrong format. ")
            if ((typeof yRatio !== "number" && typeof yRatio !== "undefined") || (typeof yRatio === "number" && yRatio <= 0)) throw new Error("Input yRatio is in wrong format. ")
            this.height = this.height * this.ensureMinOneArgument(yRatio);
            this.width = this.width * this.ensureMinOneArgument(xRatio);
            scaleSprite(this.id, this.ensureMinOneArgument(xRatio), this.ensureMinOneArgument(yRatio), this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        } catch (e) {
            console.log(e.message);
        }
    }

    turnAround(time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            this.currDirIsLeft = !this.currDirIsLeft;
            flipHorizontally(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        } catch (e) {
            console.log(e.message);
        }
    }

    turnLeft(time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (!this.currDirIsLeft) {
                flipHorizontally(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
                this.currDirIsLeft = true;
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    turnRight(time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            if (this.currDirIsLeft) {
                flipHorizontally(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
                this.currDirIsLeft = false;
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    flipVertically(time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            flipVertically(this.id, this.animationTimeCheck(time), this.animationEasingCheck(animation), this.animationSkippableCheck(canSkip), promise);
        } catch (e) {
            console.log(e.message);
        }
    }

    turnBackAndForth(interval: number, finalDirIsLeft?: boolean, totalTime?:number, time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            if ((typeof interval !== "number" && typeof interval !== "undefined") || (typeof interval === "number" && interval <= 0)) throw new Error("Input Interval is in wrong format. ")
            if ((typeof totalTime !== "number" && typeof totalTime !== "undefined") || (typeof totalTime === "number" && totalTime <= 0)) throw new Error("Input Total Time is in wrong format. ")
            if (typeof finalDirIsLeft !== "boolean" && typeof finalDirIsLeft !== "undefined") throw new Error("Input Final Direction Is Left is in wrong format. ")
            if (typeof totalTime === "undefined") {
                let character = this;
                setInterval(function () {
                    flipHorizontally(character.id, character.animationTimeCheck(time), character.animationEasingCheck(animation), character.animationSkippableCheck(canSkip), promise);
                    character.currDirIsLeft = !character.currDirIsLeft;
                }, interval);
                if (typeof finalDirIsLeft === "boolean") {
                    throw new Error("Final Direction cannot be set for turns which has an unknown stop time. Decide the final direction at the start of the next frame. ")
                }
            } else if (typeof totalTime === "number" && typeof finalDirIsLeft === "boolean" && totalTime > 0) {
                let startCounter: number = 0;
                let maxCounter: number = totalTime / interval;
                let character = this;
                let rotationExercise = setInterval(function () {
                    flipHorizontally(character.id, character.animationTimeCheck(time), character.animationEasingCheck(animation), character.animationSkippableCheck(canSkip), promise);
                    character.currDirIsLeft = !character.currDirIsLeft;
                   startCounter+=1;
                    if (startCounter == maxCounter) {
                        clearInterval(rotationExercise);
                        if (this.currDirIsLeft != finalDirIsLeft) {
                            flipHorizontally(character.id, character.animationTimeCheck(time), character.animationEasingCheck(animation), character.animationSkippableCheck(canSkip), promise);
                            character.currDirIsLeft = finalDirIsLeft;
                        }
                    }
                }, interval);                
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    say(text: string, time?: number, animation?: string, canSkip?: boolean, promise?: Function): void {
        try {
            this.argumentCheck(time, animation, canSkip);
            
        } catch (e) {
            console.log(e.message);
        }
    }
}