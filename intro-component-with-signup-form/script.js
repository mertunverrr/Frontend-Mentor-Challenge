const myForm = document.getElementById('myForm');
const error = document.querySelectorAll('.mess-error');

myForm.addEventListener('submit', (e)=>{
    for(let i = 0; i < myForm.length-1; i++){

        if(!myForm[i].validity.valid){
            error[i].style.display = 'inline';
            myForm[i].style.border = 'red 1px solid'
            myForm[i].placeholder = '';

            if(i === 2){
                myForm[i].value = '';
                myForm[i].style.color = 'red';
                myForm[i].placeholder = 'email@example.com'
            }
        }
        else{
            error[i].style.display = 'none';
            myForm[i].style.color = '#000';
            myForm[i].style.border = '1px solid hsla(0, 0%, 0%, 0.3)';
        }
    }

    e.preventDefault();
});

