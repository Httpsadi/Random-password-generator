const passwordInput = document.getElementById('password');
const rangeInput = document.getElementById('range');
const rangeValue = document.querySelector('.range_val');
const lowerCaseCheckbox = document.getElementById('lower-case');
const upperCaseCheckbox = document.getElementById('upper-case');
const numbersCheckbox = document.getElementById('numbers');
const charactersCheckbox = document.getElementById('characters');
const generateBtn = document.getElementById('generate-btn');

const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
});

const generatePassword = () => {
    const passwordLength = parseInt(rangeInput.value);
    let availableChars = '';
    let password = '';

    if (lowerCaseCheckbox.checked) availableChars += lowerCaseChars;
    if (upperCaseCheckbox.checked) availableChars += upperCaseChars;
    if (numbersCheckbox.checked) availableChars += numberChars;
    if (charactersCheckbox.checked) availableChars += specialChars;

    if (availableChars.length === 0) {
        alert('Please select at least one character type!');
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    passwordInput.value = password;
};

generateBtn.addEventListener('click', generatePassword);
