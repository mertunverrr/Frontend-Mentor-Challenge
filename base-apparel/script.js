const myForm = document.querySelector('#myForm');
const input = document.querySelector('#mailForm');
const errorImg = document.querySelector('#errorImg');
const errorText = document.querySelector('#errorMess');
const button = document.querySelector('#btn');

function isValidEmail(email) {
    // E-posta adresi için regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

myForm.addEventListener('submit', (e) =>{
    
    if(!isValidEmail(input.value)){
        errorImg.style.visibility = 'visible';
        errorText.style.visibility = 'visible';
        input.style.borderColor = 'red';
    }else{
        errorImg.style.visibility = 'hidden';
        errorText.style.visibility = 'visible';
        input.style.borderColor = 'green';
        errorText.innerText = 'Thanks. Stay well.'
        errorText.style.color = 'green';
    }



    e.preventDefault();
})