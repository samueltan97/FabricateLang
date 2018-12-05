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