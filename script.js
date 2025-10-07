document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your order! We will contact you soon.');
    this.reset(); // Reset the form fields
});