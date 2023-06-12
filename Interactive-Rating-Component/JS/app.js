const buttons = document.querySelectorAll('.btn')
const submitButton = document.querySelector('#submitButton')
const ratingScreen = document.querySelector('.ratingScreen')
const resultScreen = document.querySelector('.resultScreen')
const ratingText = document.querySelector('.ratingText')
const score = document.querySelector('#score')

buttons.forEach(button => {
    button.addEventListener('click', btn => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        btn.target.classList.add('selected')
    })
})

submitButton.addEventListener('click', () => {
    const selectedButton = document.querySelector('.selected')
    if( selectedButton != null){
        ratingScreen.style.display = 'none'
        resultScreen.style.display = 'block'
        score.innerHTML = `You selected ${selectedButton.value} out of 5`
    } else {
        ratingText.style.display = 'block'
    }
})