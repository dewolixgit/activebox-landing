"use strict"

// взаимодействие с header
let header = document.querySelector('.header')
let navToggle = document.querySelector('.nav-toggle');
let nav = document.querySelector('.nav')
if (document.documentElement.clientWidth <= 768) nav.style.display = 'none'

navToggle.onclick = () => {
    header.classList.toggle('active')
    navToggle.classList.toggle('active')

    nav.style.display = ( nav.style.display == 'none' ) ? 'flex' : 'none'
}


//взаимодейстие в окне с отзывами
let circles = document.querySelectorAll('.reviews__circle');
let reviewsLeftArrow = document.querySelector('.reviews__arrow--left');
let reviewsRightArrow = document.querySelector('.reviews__arrow--right');
let numberOfActiveCircle = 1;

reviewsLeftArrow.onclick = () => {
    circles[numberOfActiveCircle].classList.remove('active');
    numberOfActiveCircle = numberOfActiveCircle - 1
    numberOfActiveCircle = (numberOfActiveCircle < 0) ? 4 : numberOfActiveCircle--;
    circles[numberOfActiveCircle].classList.add('active');
}

reviewsRightArrow.onclick = () => {
    circles[numberOfActiveCircle].classList.remove('active');
    numberOfActiveCircle = numberOfActiveCircle + 1
    numberOfActiveCircle = (numberOfActiveCircle > 4) ? 0 : numberOfActiveCircle++;
    circles[numberOfActiveCircle].classList.add('active');
}