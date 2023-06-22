const celciusInput = document.getElementById('celciusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const conversionBtn = document.getElementById('conversionBtn');
const resetBtn = document.getElementById('resetBtn');
const reverseBtn = document.getElementById('reverseBtn');

// Conversion function
function convertTemperature() {
  const celciusValue = parseFloat(celciusInput.value);
  const fahrenheitValue = (celciusValue * 9/5) + 32;
  fahrenheitInput.value = fahrenheitValue.toFixed(2); // Display result with 2 decimal places
}

// Reset function
function resetInputs() {
  celciusInput.value = '';
  fahrenheitInput.value = '';
}

// Reverse function
function reverseValues() {
  const celciusValue = parseFloat(celciusInput.value);
  const fahrenheitValue = parseFloat(fahrenheitInput.value);

  celciusInput.value = fahrenheitValue.toFixed(2);
  fahrenheitInput.value = celciusValue.toFixed(2);
}

// Add event listeners to buttons
conversionBtn.addEventListener('click', convertTemperature);
resetBtn.addEventListener('click', resetInputs);
reverseBtn.addEventListener('click', reverseValues);