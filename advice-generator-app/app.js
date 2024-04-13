const adviceNumber = document.querySelector('#title');
const adviceText = document.querySelector('#subText');
const diceBtn = document.querySelector('.dice');

diceBtn.addEventListener('click',getAdvice);
window.addEventListener('load',getAdvice);

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceNumber.innerText = `advice #${data.slip.id}`;
        adviceText.innerText = data.slip.advice;
    })
    .catch(error => {
        console.log(error);
    })
}