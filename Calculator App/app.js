const resultInput = document.querySelector('.result');
const keypad = document.querySelector('.keypad');

const change = new Theme();
change.changeTheme();

resultInput.addEventListener('input', ()=> {
    const allowedChars = /^[0-9\-*x×/.]*$/; // Regex 
    if(!allowedChars.test(resultInput.value)) {
        resultInput.value = resultInput.value.replace(/[^0-9+\-*x×/.]/g, '');
    }
})

keypad.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        let value = e.target.innerText;
        handleInput(value);
    }
})

function handleInput(value) {
    switch (value) {
        case 'C':
            clearDisplay();
            break;
        
        case 'DEL':
            deleteLastChar();
            break;
        
        case '=':
            solve();
            break;

        default:
            addInput(value);
            break;
    }

}

function clearDisplay(){
    resultInput.value = '';
}

function deleteLastChar(){
    resultInput.value = resultInput.value.slice(0 , -1);
}

function solve(){
    try {
        const expression = resultInput.value.replace(/x/g, '*');
        resultInput.value = eval(expression);
    } catch(err){
        resultInput.value = 'Error';
    }
}

function addInput(value) {
    resultInput.value += value;
}
