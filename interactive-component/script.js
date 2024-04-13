const ratings = document.querySelectorAll('.rating-btn');
const submit = document.querySelector('.submit-btn');
const ratingText= document.querySelector('.selected');

let clickedRating = 0;

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        clickedRating = rating.textContent;
        rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating.style.color = 'hsl(0, 0%, 100%)';
    })
})

submit.addEventListener('click' , ()=> {
    const cardStates = document.querySelectorAll('.card');
    cardStates[0].classList.toggle('visibility');
    cardStates[1].classList.toggle('visibility');

    ratingText.textContent = `You selected ${clickedRating} out of 5`
})