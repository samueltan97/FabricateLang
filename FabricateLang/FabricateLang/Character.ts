import { moveSprite, flipHorizontally, scaleSprite, flipVertically } from "./CSSAnimation";

export class Character {
    readonly id: string;
    readonly defImageURL: string;
    private defName: string;
    private defWidth: number;
    private defHeight: number;
    private defXOffset: number;
    private defYOffset: number;
    private defXAnchor: number; // set transform origin during creation of character in js
    private defYAnchor: number; // set transform origin during creation of character in js
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