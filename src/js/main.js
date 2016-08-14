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

$('body').on('click','.dev', (event) => {
    event.preventDefault();
    $('.retry').toggleClass('retry--visible');
    giphy.search();
})

//Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-82317011-1', 'auto');
ga('send', 'pageview');
