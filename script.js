document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const message = document.getElementById('message').value;

    if (name && email && destination && message) {
        alert('Thank you, ' + name + '! Your booking request for ' + destination + ' has been submitted.');
        document.getElementById('bookingForm').reset(); // Clear form
    } else {
        alert('Please fill out all fields.');
    }
});
