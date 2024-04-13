const submitBtn = document.querySelector('.calcBtn');

let dUser = document.querySelector('#day');
let mUser = document.querySelector('#month');
let yUser = document.querySelector('#year');

const dError = document.querySelector('.day-error');
const mError = document.querySelector('.month-error');
const yError = document.querySelector('.year-error');

let dOutput = document.querySelector('#daysOutput');
let mOutput = document.querySelector('#monthsOutput');
let yOutput = document.querySelector('#yearsOutput');

const date = new Date();
let dCurrent = date.getDate();
let mCurrent = 1 + date.getMonth();
let yCurrent = date.getFullYear();

const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

submitBtn.addEventListener('click',handleSubmit)

function validateInput(){
    dUser.oninput = () => {
        if(dUser.value == 0 ){
            dError.style.display = 'block';
            dError.innerText = "The field is required";
        }else if(dUser.value > 31){
            dError.style.display = 'block';
            dError.innerText = "Must be a valid day";
        }else{
            dError.style.display = 'none';
            dError.innerText = "";
        }
    };

    mUser.oninput = () => {
        if(mUser.value == 0){
            mError.style.display = 'block';
            mError.innerText= "The field is required";
        }else if(mUser.value > 12){
            mError.style.display = 'block';
            mError.innerText = "Must be a valid mouth";
        }else{
            mError.style.display = 'none';
            mError.innerText = "";
        }
    };

    yUser.oninput = () => {
        if(yUser.value == 0){
            yError.style.display = 'block';
            yError.innerText= "The field is required";
        }else if(yUser.value > yCurrent){
            yError.style.display = 'block';
            yError.innerText = "Must be a valid year";
        }else{
            yError.style.display = 'none';
            yError.innerText = "";
        }
    };
}


let d = 0;
let m = 0;

function handleSubmit() {

    if(dUser.value > months[mUser.value-1]){
        dError.innerText = "Must be a valid day";
        dOutput.innerText = "--";
        mOutput.innerText = "--";
        yOutput.innerText = "--";
        return;
    }else if(mUser > 12) {
        return;
    }else if(yUser > yCurrent){
        return;
    }

    if (dUser.value == "" || dUser.value == 0) {
        dError.style.display = 'block';
        dError.innerText = "The field is required";
        return;
    } else {
        d = dCurrent - dUser.value;
    }

    if (mUser.value == "" || mUser.value ==0) {
        dError.style.display = 'block';
        dError.innerText = "The field is required";
        return;
    } else{
        m = mCurrent - mUser.value;
    }

    if(yUser.value == "" || yUser.value == 0){
        yError.style.display = 'block';
        yError.innerText = "The field is required";
        return;
    }else{
        y = yCurrent - yUser.value;
    }
    calculateAge();
    resetCurrentDate();

}

function calculateAge () {
    if (d<0) {
        dCurrent = dCurrent + months[mUser.value-1];
        mCurrent = mCurrent -1;
    }

    if(m<0) {
        mCurrent += 12;
        yCurrent -= 1;
    }

    const dResult = dCurrent - dUser.value;
    const mResult = mCurrent - mUser.value;
    const yResult = yCurrent - yUser.value;

    dOutput.innerText= dResult;
    mOutput.innerText = mResult;
    yOutput.innerText = yResult;
};

function resetCurrentDate () {
    dCurrent = date.getDate();
    mCurrent = 1+ date.getMonth();
    yCurrent = date.getFullYear();
}




    
validateInput();




