const input = document.querySelector('#mail')
const button = document.querySelector('#btn')
const warning = document.querySelector('#warning')
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
button.addEventListener('click', e => {
    if(input.value.match(mailFormat)){
        console.log('Button has worked correctly.')
        warning.style.display = 'none'
        input.style.borderColor =''
    } else{
        console.log('An error occurred.')
        warning.style.display = 'block'
        input.style.borderColor = 'red'
    }
})