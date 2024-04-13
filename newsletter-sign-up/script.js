const submitBtn = document.querySelector('#submitBtn');
const form = document.querySelector('.email-form');
const errorMessage = document.querySelector('.hidden');
const input = document.querySelector('#mailInput');
const mail = document.querySelector('#mailValue');


submitBtn.addEventListener('click', (e) => {
    if(!isValidEmail(input.value)){
        errorMessage.style.visibility = 'visible';
        input.style.color = 'red';
        input.style.border= '1px red solid';
    }else{
        sessionStorage.setItem('email', input.value);
        errorMessage.style.visibility = 'hidden';
        window.location.href = "success.html";
        
    }



    e.preventDefault();
})




function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
