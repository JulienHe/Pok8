'use strict';

import {Giphy} from "./giphy";
import {Shaker} from "./shake";
import {Helpers} from "./helpers";
import $ from 'jquery';

const giphy = new Giphy();
const shaker = new Shaker();
const helpers = new Helpers();

// shaker.shakeIt();
$('body').on('click', '.pokeball' ,() => {

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
        // Remove shape__cross
        giphy.search();
    }else{
        $('.cross, .answer').remove();
    }

    setTimeout(function () {
        $('.pokeball__up').toggleClass('pokeball__up--animated');
        $('.pokeball__up__background').toggleClass('pokeball__up__background--animated');
        $('.pokeball__down').toggleClass('pokeball__down--animated');
        $('.pokeball__down__background').toggleClass('pokeball__down__background--animated');
        $('.pokeball__center').toggleClass('pokeball__center--animated');
    }, 100);
})
