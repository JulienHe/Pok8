'use strict';

import Shake from 'shake.js';
import {Helpers} from './helpers';
import $ from 'jquery';

const helpers = new Helpers();

export class Shaker{
    constructor(){
        var ax = 0, ay = 0;

        if (window.DeviceMotionEvent != undefined) {
            window.ondevicemotion = function(e) {
                ax = event.accelerationIncludingGravity.x * 5;
                ay = event.accelerationIncludingGravity.y * 5;
                this.accelerationX = e.accelerationIncludingGravity.x;
                this.accelerationY = e.accelerationIncludingGravity.y;
                this.accelerationZ = e.accelerationIncludingGravity.z;
            }
        }
        var oldX = this.accelerationX, oldY = this.accelerationY, oldZ = this.accelerationZ;
        setInterval(function(){
            var diffX = oldX - this.accelerationX;
            var diffY = oldY - this.accelerationY;
            var diffZ = oldZ - this.accelerationZ;
            // You shake the device
            if(!helpers.between(diffX) || !helpers.between(diffY) || !helpers.between(diffZ)){
                console.log("You shake it.");
            // You don't shake the device
            }else{
                console.log("You don't shake it.");
            }
            oldX = this.accelerationX;
            oldY = this.accelerationY;
            oldZ = this.accelerationZ;
        }, 200);
    }
}
