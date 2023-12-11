

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        event.preventDefault(); // Prevent form submission
    }
    // Add more validation as needed
});
