const button = document.querySelector('#btn')
const inputs = document.querySelectorAll('input')
const warning = document.querySelectorAll('.warnings')
const errorIcon = document.querySelectorAll('.icon')
const email = document.querySelector('#email')
const invalidEmail = document.querySelector('.invalid')
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

button.addEventListener('click', () => {
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value === ""){
            warning[i].style.display = 'block'
            errorIcon[i].style.backgroundImage = 'url(images/icon-error.svg)'
        }else{
            warning[i].style.display = 'none'
            errorIcon[i].style.backgroundImage = 'none'
        }
    }
})

button.addEventListener('click', () => {
    if(email.value === "" || email.value.match(emailRegEx)){
        invalidEmail.style.display = 'none'
    } else{
        invalidEmail.style.display = 'block'
        errorIcon[2].style.backgroundImage = 'url(images/icon-error.svg)'
    }
})