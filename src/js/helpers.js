'use strict';

export class Helpers{
    constructor(){
        this.low = -5;
        this.high = 5;
    }
    between(number){
        var min = Math.min(this.low, this.high),
        max = Math.max(this.low, this.high);
        return number > min && number < max;
    }
    randomBetween(min, max){
        var value = Math.floor(Math.random()*(max-(min)+1)+(min));
        return value;
    }
    calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
        return { width: srcWidth*ratio, height: srcHeight*ratio };
    }
    checkVariable(variableLoaded) {
        if(variableLoaded==true){
            return variableLoaded;
        }
    }
}
