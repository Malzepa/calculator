const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}
 debugger
 
function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction (val1, val2, actionSymbol) {
    const num1 = Number(val1.value) 
    const num2 = Number(val2.value)
    return actionSymbol = "+" ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const total = computeNumbersWithAction (input1, input2, action)
    printResult(total)
}