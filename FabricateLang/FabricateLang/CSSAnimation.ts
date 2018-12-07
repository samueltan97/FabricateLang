import * as $ from 'jquery';

export function moveSprite(id: string, xOffset: number, yOffset: number, time: number, animation: string, canSkip: boolean, promise: Function):void {
    $("#" + id).animate({
        "left": xOffset.toString(),
        "top": yOffset.toString(),
    }, time, animation, promise());
}

export function flipHorizontally(id: string, time: number, animation: string, canSkip: boolean, promise: Function): void {
    $("#" + id).animate({
        "transform": "scaleX(-1)"
    }, time, animation, promise());
}

export function flipVertically(id: string, time: number, animation: string, canSkip: boolean, promise: Function): void {
    $("#" + id).animate({
        "transform": "scaleY(-1)"
    }, time, animation, promise());
}

export function scaleSprite(id: string, scaleX: number, scaleY:number, time:number, animation: string, canSkip: boolean, promise: Function): void {
    $("#" + id).animate({
        "transform": "scale(" + scaleX + ", " + scaleY + ")"
    }, time, animation, promise());
}

export function setText(id: string, text: string):void {
    $("#" + id).text(text);
}

export function setFontSize(id: string, fontSize: number):void {
    $("#" + id).css("font-size", fontSize.toString() + "vw");
}

export function setBold(id: string, toBold:boolean): void {
    let fontWeight: string = (toBold) ? "800" : "400";
    $("#" + id).css("font-weight", fontWeight);
}

export function setItalic(id: string, toItalic: boolean): void {
    let fontItalic: string = (toItalic) ? "italic" : "normal";
    $("#" + id).css("font-style", fontItalic);
}

export function setCentered(id: string, toCentered: boolean): void {
    let isCentered: string = (toCentered) ? "isCentered" : "";
    $("#" + id).removeClass("isCentered").addClass(isCentered);
}

export function setFontColor(id: string, fontColor: string): void {
    $("#" + id).css("color", fontColor);
}

