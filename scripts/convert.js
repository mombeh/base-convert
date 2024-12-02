// Declear variables of all the element
const inputNum = document.getElementById('input')
const convertNum = document.getElementById('convert')
const guessNumber = document.getElementById('guess')
const restartDisplay = document.getElementById('convertedValue')
const convertedValue = document.getElementById('convertedValue')

convertNum.addEventListener('click', () => {
  const num1 = parseInt(inputNum.value, 10)
  const num2 = parseInt(guessNumber.value, 10)
 // initialise varable
  if (isNaN(num1)) {
   convertedValue.textContent = 'Enter the corresponded number'
   convertedValue.style.color = 'red'
  }

  const clickNumber = num1.toString(num2)
  restartDisplay.textContent = `From ${num1} To ${num2} is ${clickNumber}`
  restartDisplay.style.color = 'blue'
})
