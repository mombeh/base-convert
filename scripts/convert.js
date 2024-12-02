// Declear variables of all the element
let inputNum = document.getElementById('input')
let convertNum = document.getElementById('convert')
let guessNumber = document.getElementById('guess')
let restartDisplay = document.getElementById('convertedValue')

convertNum.addEventListener('click', () => {
  let num1 = parseInt(inputNum.value, 10)
  let num2 = parseInt(guessNumber.value, 10)

  if(isNaN(num1)){
    convertedValue.textContent = 'Enter the corresponded number'
    onvertedValue.style.color = 'red'
  }

  let clickNumber = num1.toString(num2)
  restartDisplay.textContent = `From ${num1} To ${num2} is ${clickNumber}`
  restartDisplay.style.color =  'blue'
})