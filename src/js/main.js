'use strict';

import {Shaker} from "./shake";
import {Giphy} from './giphy';
import {Pokeball} from './pokeball';
import $ from 'jquery';

const shaker = new Shaker();
const giphy = new Giphy();
const pokeball = new Pokeball();

var goShake = shaker.listen();

// shaker.shakeIt();
$('body').on('click', '.retry' ,(e) => {
    e.preventDefault();
    pokeball.togglePokeball();
    pokeball.openClosePokeball(0,0);
    $('.retry').toggleClass('retry--visible');
    goShake = shaker.listen();
});
