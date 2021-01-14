const inputs = document.querySelectorAll('input')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

inputs.forEach(input => {
    input.addEventListener('change', ()=>{
        if(good.checked && cheap.checked && fast.checked){
            const any = Math.floor(Math.random() * inputs.length)
            inputs[any].checked = false
        }
    })
})

