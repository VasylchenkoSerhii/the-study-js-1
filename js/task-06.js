const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onValidationInput);


function onValidationInput(event) {
    if (event.target.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
        return;
    }

    inputRef.classList.add('invalid');
}