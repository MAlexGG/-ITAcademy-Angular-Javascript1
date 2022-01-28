// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firstName = document.querySelector('.name');
var lastName = document.querySelector('.lastName');
var address = document.querySelector('.address');
var email = document.querySelector('.email');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorLastName = document.getElementById('errorLastName');  
var errorPhone = document.getElementById('errorPhone');  
var errorAddress = document.getElementById('errorAddress');
var errorMail = document.getElementById('errorMail');


// Exercise 8
function validate(e) {
    // Validate fields entered by the user: name, phone, password, and email

    let numbers = /^[0-9]+$/;
    let letters = /^[A-Za-z]+$/;
    let numbersAndLetters = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
    let emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (password.value.length === 0 || password.value == null || password.value.length < 3 || !numbersAndLetters.test(password.value)) {
        e.preventDefault();
        errorPassword.style.display = 'block';
        errorPassword.style.fontWeight = 'bold';
        password.classList.add('invalidInput');
    };
    if (firstName.value.length === 0 || firstName.value == null || firstName.value.length < 3 || numbers.test(firstName.value)) {
        e.preventDefault();
        errorName.style.display = 'block';
        errorName.style.fontWeight = 'bold';
        firstName.classList.add('invalidInput');
    };
    if (lastName.value.length === 0 || lastName.value == null || lastName.value.length < 3 || numbers.test(lastName.value)) {
        e.preventDefault();
        errorLastName.style.display = 'block';
        errorLastName.style.fontWeight = 'bold';
        lastName.classList.add('invalidInput');
    };
    if (phone.value.length === 0 || phone.value == null || phone.value.length < 3 || letters.test(phone.value)) {
        e.preventDefault();
        errorPhone.style.display = 'block';
        errorPhone.style.fontWeight = 'bold';
        phone.classList.add('invalidInput');
    };
    if (address.value.length === 0 || address.value == null || address.value.length < 3 ) {
        e.preventDefault();
        errorAddress.style.display = 'block';
        errorAddress.style.fontWeight = 'bold';
        address.classList.add('invalidInput');
    };
    if (email.value.length === 0 || email.value == null || email.value.length < 3 || !emailValidation.test(email.value)) {
        e.preventDefault();
        errorMail.style.display = 'block';
        errorMail.style.fontWeight = 'bold';
        email.classList.add('invalidInput');
    };
}
