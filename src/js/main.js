'use strict';

import {Shaker} from "./shake";
import {Giphy} from './giphy';
import {Pokeball} from './pokeball';
import $ from 'jquery';

const shaker = new Shaker();
const giphy = new Giphy();
const pokeball = new Pokeball();


$('body').on('click', '.start' , (event) => {
    event.preventDefault();
    $('.modal').addClass('invisible');
    var goShake = shaker.listen();
})

// shaker.shakeIt();
$('body').on('click', '.retry' ,(event) => {
    event.preventDefault();
    pokeball.togglePokeball();
    pokeball.openClosePokeball(0,0);
    $('.retry').toggleClass('retry--visible');
    goShake = shaker.listen();
});
