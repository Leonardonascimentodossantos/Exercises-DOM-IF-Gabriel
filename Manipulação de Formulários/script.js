const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('result');
const nameError = document.getElementById('name-error');
const ageError = document.getElementById('age-error');

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Por favor, insira seu nome.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (ageInput.value.trim() === '') {
        ageError.textContent = 'Por favor, insira sua idade.';
        isValid = false;
    } else {
        ageError.textContent = '';
    }

    return isValid;
}

function getInputValues() {
    if (!validateForm()) {
        return;
    }

    const name = nameInput.value;
    const age = ageInput.value;
    
    resultDisplay.textContent = `Nome: ${name}, Idade: ${age}`;
}

submitBtn.addEventListener('click', getInputValues);