const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onControlFontSize);

function onControlFontSize(event) {
    let fontSize = String(event.currentTarget.value);
    refs.text.style.fontSize = fontSize + 'px';
};
