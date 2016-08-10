'use strict';

import {Helpers} from './helpers';
import $ from 'jquery';

const helpers = new Helpers();

export class Pokeball{
    constructor(){

    }
    togglePokeball(){
        // Detect the ball is closed
        if (!$('.pokeball__up').hasClass('pokeball__up--animated')) {
            $('body').append( '<div class="cross cross--purple"></div>' );
            $('body').append( '<div class="cross cross--blue"></div>' );
            $('body').append( '<div class="cross cross--yellow"></div>' );
            $('body').append( '<div class="cross"></div>' );

            setTimeout(function(){
                $('.cross').each( function(){
                    $(this).css("transform", "rotateZ("+ helpers.randomBetween(-360, 360) +"deg) translate("+ helpers.randomBetween(-50, 50) +"px, " + helpers.randomBetween(50, 400) + "px)");
                });
            }, 10);
        // When we close the pokeball, we remove element, less element.
        }else{
            $('.cross, .answer').remove();
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
}
