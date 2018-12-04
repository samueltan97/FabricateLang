import { moveSprite, flipHorizontally } from "./CSSAnimation";

export class Character {
    readonly id: string;
    readonly defImageURL: string;
    private defName: string;
    private defWidth: number;
    private defHeight: number;
    private defXOffset: number;
    private defYOffset: number;
    private defXAnchor: number;
    private defYAnchor: number;
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

    constructor(id:string, imageURL:string, name:string, width:number, height:number, xOffset:number, yOffset:number, xAnchor:number, yAnchor:number, defDirIsLeft:boolean) {
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

    addSprite(spriteName: string, imageURL: string) {
        this.expressionDictionary[spriteName] = imageURL;
    }

    move(xOffset?: number, yOffset?: number, time?: number, animation?: string, canSkip?: boolean, promise?: Function):void {
        let animationTime: number = (typeof time === "number" && time >= 0) ? time : 0;
        let animationType: string = (typeof animation === "string") ? animation : "linear";
        let skippable: boolean = (typeof canSkip === "boolean") ? canSkip : true;
        this.xOffset = (typeof xOffset === "number") ? this.xOffset += xOffset : this.defXOffset;
        this.yOffset = (typeof yOffset === "number") ? this.yOffset += yOffset : this.defYOffset;
        if ((xOffset < 0 && !this.currDirIsLeft) || (xOffset > 0 && this.currDirIsLeft)) {
            flipHorizontally(this.id, 200, "linear", true, null);
        }
        moveSprite(this.id, this.xOffset, this.yOffset, animationTime, animationType, skippable, promise);
    }

    moveTo(xPosition?: number, time?: number, animation?: string, canSkip?: boolean, promise?: Function):void {
        let animationTime: number = (typeof time === "number" && time >= 0) ? time : 0;
        let animationType: string = (typeof animation === "string") ? animation : "linear";
        let skippable: boolean = (typeof canSkip === "boolean") ? canSkip : true;
        if ((this.xOffset > xPosition  && !this.currDirIsLeft) || (this.xOffset < xPosition && this.currDirIsLeft)) {
            flipHorizontally(this.id, 200, "linear", true, null);
        }
        this.xOffset = (typeof xPosition === "number") ? xPosition : this.defXOffset;
        moveSprite(this.id, this.xOffset, this.yOffset, animationTime, animationType, skippable, promise);
    }
}