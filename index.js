function appendToDisplay(char) {
  document.querySelector('.input').innerText += char;
}

// Function to delete the last character from the display
function deleteLastChar() {
  let input = document.querySelector('.input').innerText;
  document.querySelector('.input').innerText = input.slice(0, -1);
}

function clearDisplay() {
  // Clear both input and output displays
  document.querySelector('.input').innerHTML = '';
  document.querySelector('.output').innerHTML = '';
}

// Function to calculate and display the result
function calculateResult() {
  let input = document.querySelector('.input').innerText;
  let result;
  try {
      result = eval(input);
      document.querySelector('.output').innerText = result;
  } catch (error) {
      document.querySelector('.output').innerText = 'Error';
  }
}