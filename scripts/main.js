document.querySelectorAll('.rsvp form, .contact form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('confirmation-message').innerText = 'Thank you for your submission!';
    });
});