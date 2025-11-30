// const container = document.querySelector('.container');
// const registerBtn = document.querySelector('.register-btn');
// const loginBtn = document.querySelector('.login-btn');

// // Add 'active' class to show Register form and slide the panel
// registerBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent any default button action
//     container.classList.add('active');
// });

// // Remove 'active' class to show Sign In form and slide the panel back
// loginBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent any default button action
//     container.classList.remove('active');
// });





// login.js
import { auth } from './firebase-config.js'; 
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add('active');
        });
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove('active');
        });
    }
});

// Google Login
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('click', async (e) => {
        if (icon.querySelector('.fa-google')) {
            e.preventDefault();
            const provider = new GoogleAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider);
                alert(`Welcome, ${result.user.displayName}!`);
                window.location.href = 'index.html';
            } catch (error) {
                console.error(error);
                alert("Login Failed: " + error.message);
            }
        }
    });
});