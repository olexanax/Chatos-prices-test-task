"use strict"

const cards = document.querySelectorAll('.card__item');
const buttons = document.querySelectorAll('.card__button');

const toggleActiveClass = i => {
    for(let j = 0; j<cards.length; j++){
        cards[j].classList.remove('active__card')
        buttons[j].classList.remove('active__button')
    }
    cards[i].classList.add('active__card')
    buttons[i].classList.add('active__button')
}

cards.forEach((card, i) => {
    card.addEventListener('click', () => toggleActiveClass(i))
})
buttons.forEach((button, i) => {
    button.addEventListener('keydown', (e) => {
        if(e.key === ' ' || e.key === 'Enter'){
            toggleActiveClass(i)
        }
    })
})