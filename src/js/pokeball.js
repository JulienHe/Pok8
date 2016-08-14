'use strict';

import {Helpers} from './helpers';
import $ from 'jquery';

const helpers = new Helpers();

export class Pokeball{
    constructor(){
        this.shapes = ["cross", "circle", "triangle"];
        this.colors = ["purple", "blue", "yellow"];
    }
    togglePokeball(){
        // Detect the ball is closed
        if (!$('.pokeball__up').hasClass('pokeball__up--animated')) {
            $('body').append( '<div class="shape cross cross--purple"></div>' );
            $('body').append( '<div class="shape cross cross--blue"></div>' );
            $('body').append( '<div class="shape cross cross--yellow"></div>' );
            $('body').append( '<div class="shape cross"></div>' );
            $('body').append( '<div class="shape cross cross--purple"></div>' );
            $('body').append( '<div class="shape cross cross--blue"></div>' );
            $('body').append( '<div class="shape cross cross--yellow"></div>' );
            $('body').append( '<div class="shape cross"></div>' );
            $('body').append( '<div class="shape cross cross--purple"></div>' );
            $('body').append( '<div class="shape cross cross--blue"></div>' );
            $('body').append( '<div class="shape cross cross--yellow"></div>' );
            $('body').append( '<div class="shape cross"></div>' );
            // this.createShape();
            setTimeout(function(){
                $('.shape').each( function(){
                    $(this).css("transform", "rotateZ("+ helpers.randomBetween(-360, 360) +"deg) translate("+ helpers.randomBetween(-50, 50) +"px, " + helpers.randomBetween(50, 400) + "px)");
                });
            }, 10);
        // When we close the pokeball, we remove element, less element.
        }else{
            $('.shape, .answer').remove();
        }
    }
    openClosePokeball(heighti, deg){
        //Animate the pokeball opening
        setTimeout(function () {
            $('.pokeball__up').toggleClass('pokeball__up--animated').css("transform", "rotateX("+ deg +"deg) translate(0px, -" + heighti+ "px)");
            $('.pokeball__up__background').toggleClass('pokeball__up__background--animated');
            $('.pokeball__down').toggleClass('pokeball__down--animated').css("transform", "rotateX(-"+ deg +"deg) translate(0px, " + heighti + "px)");
            $('.pokeball__down__background').toggleClass('pokeball__down__background--animated');
            $('.pokeball__center').toggleClass('pokeball__center--animated');
        }, 100);
    }
    createShape(){
        var theshape = this.shapes[helpers.randomBetween(0, this.shapes.length - 1)];
        var thecolor = this.colors[helpers.randomBetween(0, this.colors.length - 1)];
        var iDiv = document.createElement('div');
        iDiv.className = 'shape '+ theshape +' '+ theshape +'--'+ thecolor;
        document.getElementsByTagName('body')[0].appendChild(iDiv);
    }
}
