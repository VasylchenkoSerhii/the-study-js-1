const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('[name="email"]'),
    password: document.querySelector('[name="password"]'),
    sumbit: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener('submit', onFormSubit);

function onFormSubit(event) {
    event.preventDefault()
    if (refs.email.value === '' || refs.password.value === '') {
        return console.log(alert('Заполни поле!'))
    }

    let formData = {
        email: refs.email.value,
        password: refs.password.value,
    };
    refs.form.reset();
    return console.log(formData);
};
