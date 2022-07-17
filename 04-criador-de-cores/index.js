const [red, green, blue] = [document.querySelector('.red'), document.querySelector('.green'), document.querySelector('.blue')]

const [generatedColor, inputs, rgbCode] = [document.querySelector('.maker__color'), document.querySelectorAll('.maker__input'), document.querySelector('.RGB-code')]

inputs.forEach(input => input.value = 0)

const render = () => {
    rgbCode.textContent = `rgb(${red.value}, ${green.value}, ${blue.value})`
    generatedColor.style = `background: rgb(${red.value}, ${green.value}, ${blue.value});`
}

inputs.forEach(input => input.addEventListener('input', () => render()))