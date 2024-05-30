// scripts.js
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const eventDate = new Date('2024-06-15T00:00:00');
    const timerElement = document.getElementById('timer');

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = eventDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
    }

    setInterval(updateCountdown, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const modal = document.getElementById('register-modal');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('register-form');
    const speakerButtons = document.querySelectorAll('.speaker-btn');
    const bios = document.querySelectorAll('.bio');

    // Open modal
    registerBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Form validation and submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const id = document.getElementById('id').value;

        // Validate name
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            alert('Name cannot be blank and must contain only letters and spaces.');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Additional validations for ID can be added here

        // If validation passes, display success message
        alert('Registered successfully!');
        modal.style.display = 'none';
        form.reset();
    });

    // Handle speaker bios
    speakerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const bioId = button.getAttribute('data-bio');
            bios.forEach(bio => {
                if (bio.id === bioId) {
                    bio.style.display = bio.style.display === 'none' ? 'block' : 'none';
                } else {
                    bio.style.display = 'none';
                }
            });
        });
    });
});
