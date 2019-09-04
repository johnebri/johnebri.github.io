let submitBtn = document.querySelector('#submitBtn');
let response = document.querySelector('#response');
let myForm = document.querySelector('#myForm');

let name = document.querySelector('#name');
let nameError = document.querySelector('#nameError');

let email = document.querySelector('#email');
let emailError = document.querySelector('#emailError');

let title = document.querySelector('#title');
let titleError = document.querySelector('#titleError');

let message = document.querySelector('#message');
let messageError = document.querySelector('#messageError');


let cleanName;
let cleanEmail;
let cleanTitle;
let cleanMessage;           

submitBtn.addEventListener('click', () => {
    response.style.display = 'block';
    response.classList.add('success');
    response.innerText = 'I have received your message, I will get back to you as ASAP.';
    myForm.reset();
});

let validateName = () => {
    if(name.value.length < 4) {
        nameError.style.display = 'block';
        nameError.classList.add("inline-error");
        nameError.textContent = 'Your name must have at least 4 characters';
        cleanName = false;
    } else {
        nameError.style.display = 'none';
        cleanName = true;
    }
    check();
}

let validateEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email.value).toLowerCase())) {
        emailError.style.display = 'block';
        emailError.classList.add("inline-error");
        emailError.textContent = 'Please enter a valid email address';
        cleanEmail = false;
    } else {
        emailError.style.display = 'none';
        cleanEmail = true;
    }
    check();
}

let validateTitle = () => {
    if(title.value.length < 4) {
        titleError.style.display = 'block';
        titleError.classList.add("inline-error");
        titleError.textContent = 'Your title must have at least 4 characters';
        cleanTitle = false;
    } else {
        titleError.style.display = 'none';
        cleanTitle = true;
    }
    check();
}

let validateMessage = () => {
    if(message.value.length < 20) {
        messageError.style.display = 'block';
        messageError.classList.add("inline-error");
        messageError.textContent = 'Your message must have at least 20 characters';
        cleanMessage = false;
    } else {
        messageError.style.display = 'none';
        cleanMessage = true;
    }
    check();
}


let check = () => {
    if(cleanName == true && cleanEmail == true && cleanTitle == true && cleanMessage == true ) {
        submitBtn.removeAttribute('disabled');
        submitBtn.classList.add('clean');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}