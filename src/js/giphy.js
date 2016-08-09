'use strict';

import $ from 'jquery';
import {Pokeball} from './pokeball';
import {Helpers} from './helpers';

const pokeball = new Pokeball();
const helpers = new Helpers();

export class Giphy{
    constructor(){
        this.message = ["yes", "no", "maybe", "fuck off", "lol", "no way"];
    }
    search(){
        var windowWidthMeasure = window.innerWidth * .9;
        // Search (GET http://api.giphy.com/v1/gifs/search)
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/random",
            type: "GET",
            data: {
                "tag": this.message[helpers.randomBetween(0, this.message.length - 1)],
                "api_key": "dc6zaTOxFJmzC",
                "limit": "1",
            }
        })
        .done(function(data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var ratioElement = helpers.calculateAspectRatioFit(data.data.image_width, data.data.image_height, windowWidthMeasure, windowWidthMeasure);
            var image = "<img class='answer' src='"+ data.data.image_original_url +"'>";
            var heighti = ratioElement.height / 2;
            $('body').append(image);

            $(".answer").one("load", function() {
              // do stuff
                pokeball.togglePokeball();
                pokeball.openClosePokeball(heighti + 100, 30);
                setTimeout(function () {
                    $('.answer').addClass('answer--animated');
                },200);
            });

        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function() {
            /* ... */
        });
    }
}
