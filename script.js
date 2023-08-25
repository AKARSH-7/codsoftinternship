let displayValue = "";

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function appendCharacter(character) {
  displayValue += character;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}
