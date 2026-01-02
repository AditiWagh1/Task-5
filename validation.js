document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submission
    let isValid = true;
    
    // Helper function to set validation state and update UI
    function setError(element, messageId, isError) {
        const errorElement = document.getElementById(messageId);
        if (isError) {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            errorElement.style.display = 'block';
            isValid = false;
        } else {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            errorElement.style.display = 'none';
        }
    }

    
    isValid = true;
    
   
    const nameInput = document.getElementById('name');
    setError(nameInput, 'name-error', nameInput.value.trim() === '');

    
    const messageInput = document.getElementById('message');
    setError(messageInput, 'message-error', messageInput.value.trim() === '');

    
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let isEmailInvalid = false;
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        isEmailInvalid = true;
    }
    setError(emailInput, 'email-error', isEmailInvalid);


    
    if (isValid) {
        
        const formCard = document.querySelector('.form-card');
        formCard.innerHTML = `
            <h2 style="color: #a8741a; font-size: 2rem;" class="mb-3">✅ Success!</h2>
            <p style="color: #cccccc; font-size: 1.1rem;">Thank you, ${nameInput.value.trim()}.</p>
            <p style="color: #cccccc;">Validation Passed! Your inquiry has been sent.</p>
            <button onclick="window.location.reload()" class="btn btn-submit mt-4">Start New Inquiry</button>
        `;
        console.log('Task 2 Form Validation successful!');
    }
});