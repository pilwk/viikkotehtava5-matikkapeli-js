'use strict'
let rand_num1 = 0
let rand_num2 = 0
let N_correct = 0
let N_incorrect = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
    document.querySelector('#right').innerHTML = N_correct
    document.querySelector('#wrong').innerHTML = N_incorrect
}

document.addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
})

document.querySelector('button').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correct_answer = rand_num1 + rand_num2
    if (answer === correct_answer) {
        alert('Correct!')
        N_correct++      
    } else {
        alert('Incorrect!')
        N_incorrect++
    }

    randomizeNumbers()
    document.querySelector('input').value = ''
})