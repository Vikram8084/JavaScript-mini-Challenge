const count = document.querySelector('.count')
const minusBtn =document.querySelector('.minus-btn')
const plusBtn =document.querySelector('.plus-btn')
const changeBy =document.querySelector('.changeBy')
const resteBtn = document.querySelector('.reset-btn')


minusBtn.addEventListener('click', (e) => {
    //console.log('plus cliked');
    const countValue =parseInt(count.innerText)
    const changeByValue =parseInt(changeBy.value)
    
    //count.innerText = countValue - 1

    count.innerText = countValue - changeByValue
})


plusBtn.addEventListener('click', (e) => {
    const countValue =parseInt(count.innerText)
    const changeByValue =parseInt(changeBy.value)
    
    //count.innerText = countValue + 1

    count.innerText = countValue + changeByValue
})


resteBtn.addEventListener('click', () => {
    count.innerText =0
})