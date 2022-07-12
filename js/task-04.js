const refs = {
    decriment: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

let counterValue = 0;

refs.decriment.addEventListener('click', onDecriment);
refs.increment.addEventListener('click', onIncrement);

function onDecriment() {
    refs.value.textContent = counterValue -= 1;
};
function onIncrement() {
    refs.value.textContent = counterValue += 1;
};