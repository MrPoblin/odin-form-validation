import isCountry from "./isCountry.js";

let email = document.querySelector(".email");
let country = document.querySelector(".country");
let zip = document.querySelector(".zip");
let password = document.querySelector(".password");
let confirm = document.querySelector(".confirm");

function submitForm(e){
    e.preventDefault();
    if(checkForm()){
        alert("You submitted the form! High five!");
    }
}   

function checkForm(){
    return(checkEmail() &&
    checkCountry() && 
    checkZip() &&
    checkPassword() &&
    checkConfirm()
    )
}

function checkEmail(){
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Enter an Email address!");
        email.reportValidity();
        return false;
    } else {
        email.setCustomValidity("");
        return true;
    }
}
function checkCountry(){
    if(!isCountry(country.value)){
        country.setCustomValidity("Enter a valid country!");
        country.reportValidity();
        return false;
    }
    else{
        country.setCustomValidity("");
        return true;
    }
}
function checkZip(){
    if(!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip.value)){
        zip.setCustomValidity("Enter a valid Zip Code!");
        zip.reportValidity();
        return false;
    }
    else{
        zip.setCustomValidity("");
        return true;
    }
}
function checkPassword(){
    if (password.validity.tooLong){
        password.setCustomValidity("Password must be under 257 characters!");
        password.reportValidity();
        return false;
    }
    else if (password.value.length < 8){
        password.setCustomValidity("Password must be at least 8 characters!");
        password.reportValidity();
        return false;
    }
    else{
        password.setCustomValidity("");
        return true;
    }
}

function checkConfirm(){
    if(confirm.value != password.value){
        confirm.setCustomValidity("Passwords must match!");
        confirm.reportValidity();
        return false;
    }
    else{
        confirm.setCustomValidity("");
        return true;
    }
}

const submit = document.querySelector(".submit");
submit.addEventListener("click", submitForm);

email.addEventListener("input", checkEmail);
country.addEventListener("input", checkCountry);
zip.addEventListener("input", checkZip);
password.addEventListener("input", checkPassword);
confirm.addEventListener("input", checkConfirm);