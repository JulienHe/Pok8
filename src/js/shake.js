'use strict';

import {Helpers} from './helpers';
import $ from 'jquery';
import {Giphy} from './giphy';

const helpers = new Helpers();
const giphy = new Giphy();

export class Shaker{
    constructor(){
        var ax = 0, ay = 0;
        this.counter = 0;
        if (window.DeviceMotionEvent != undefined) {
            window.ondevicemotion = function(e) {
                ax = event.accelerationIncludingGravity.x * 5;
                ay = event.accelerationIncludingGravity.y * 5;
                this.accelerationX = e.accelerationIncludingGravity.x;
                this.accelerationY = e.accelerationIncludingGravity.y;
                this.accelerationZ = e.accelerationIncludingGravity.z;
            }
        }
    }
    listen(){
        var oldX = this.accelerationX, oldY = this.accelerationY, oldZ = this.accelerationZ;
        var counter = this.counter;
        var shakeMe = setInterval(function(){
            var diffX = oldX - this.accelerationX;
            var diffY = oldY - this.accelerationY;
            var diffZ = oldZ - this.accelerationZ;
            // You shake the device
            if(!helpers.between(diffX) || !helpers.between(diffY) || !helpers.between(diffZ)){
                if (counter >= 1) {
                    giphy.search();
                    $('h1, h2').addClass('hide');
                    setTimeout(function () {
                        $('.retry').toggleClass('retry--visible');
                    }, 800);
                    clearInterval(shakeMe);
                }
                counter = 1;
            }
            oldX = this.accelerationX;
            oldY = this.accelerationY;
            oldZ = this.accelerationZ;
        }, 200);
    }
}
