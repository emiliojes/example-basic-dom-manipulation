const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#inpCalculate1');
const input2 = document.querySelector('#inpCalculate2');
const button = document.querySelector('#btnCalculate');
const button2 = document.querySelector('#btnCalculate2');
const pResult = document.querySelector('#result');

button2.addEventListener('mouseover', sendForm )
form.addEventListener('submit', sendForm)

function sendForm(event) {
    event.preventDefault();
    alert('virus');

}

