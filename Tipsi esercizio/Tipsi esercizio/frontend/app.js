const authForm = document.getElementById('auth-form');
const errorMessage = document.getElementById('error-message');

authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('jwt', data.token);
            window.location.href = 'contacts.html'; // Redirect to contacts page
        } else {
            errorMessage.textContent = data.message;
        }
    })
    .catch(error => {
        errorMessage.textContent = 'Error during login';
    });
});
