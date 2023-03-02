const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Validate the email input
    if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        return;
    }

    // Validate the message input
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        return;
    }

    // Submit the form
    form.submit();
});

// Validate the email input
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Remove the error class when the user types in the email input
emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
        emailInput.classList.remove('error');
    }
});

// Remove the error class when the user types in the message input
messageInput.addEventListener('input', () => {
    if (messageInput.classList.contains('error')) {
        messageInput.classList.remove('error');
    }
});

