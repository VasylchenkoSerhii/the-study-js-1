const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputShow);

function onInputShow(event) {
    
    refs.name.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === '') {
        refs.name.textContent = 'Anonymous';
    }
    
}